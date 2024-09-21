const express = require('express')
const router = express.Router();
const owners = require('../models/ownermodel');
router.get('/', function (req, res) {
    res.send('hey its working');
});

console.log(process.env.NODE_ENV==="development");
router.get('/create', function (req, res) {
    console.log("hey");
});
module.exports = router;