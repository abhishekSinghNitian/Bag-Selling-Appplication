const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/generateToken');
module.exports.registerUser = async function (req, res) {
    try{
        let { email, password, fullname } = req.body;
        let user = await usermodel.findOne({ email: email});
        if(user){return res.status(401).send("you already have an account, please login");}
        bcrypt.genSalt(10, function (err, salt) {

            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) {
                    return res.status(500).send('Error hashing password: ' + err.message);
                }else{
                    let user =  await usermodel.create({
                        email: email,
                        password: hash,
                        fullname: fullname
                    });

                    let token = generateToken(user);
                    res.cookie('token', token);
                    res.send(user);
                    console.log("yes")
                }
            });
        });

    }
    catch(err){
        console.log(err.message);
    }
};

module.exports.loginUser = async function(req, res){
    let {email,password} = req.body;

    let user = await usermodel.findOne({email: email});

    if(!user){
        return res.send("Email or password is incorrect");
    }

    bcrypt.compare(password, user.password, function(err,result){
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("you can login");
        }
        else{
            res.send(err.message);
        }
    });
}