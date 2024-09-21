const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password:{
        type: String,
        default: 'abcd',
    },
    cart: [],
    orders: [],
    contact: Number,
    picture: String
})

module.exports = mongoose.model('user',userSchema);