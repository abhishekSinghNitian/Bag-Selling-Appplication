const mongoose = require('mongoose');
mongoose
.connect('mongodb://127.0.0.1:27017/scatch')
.then(function(connection) {
    console.log("connected")
})
.catch(function(error) {
    console.log("mongodb not connected: " + error.message)
});

module.exports = mongoose.connection;