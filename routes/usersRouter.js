const express = require('express');
const router = express.Router();
const {registerUser} = require("../controllers/authController");
require("dotenv").config();
router.get('/', function (req, res) {
    res.send('hey its working');
});

router.post('/register',registerUser);

router.post('/login',loginUser);

module.exports = router;