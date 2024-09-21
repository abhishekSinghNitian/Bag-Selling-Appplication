const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose'); // Use 'debug'

mongoose
.connect(`${config.get('MONGODB_URI')}/scatch`)
.then(function(connection) {
    console.log("connected to MongoDB"); // This will log when connection is successful
})
.catch(function(error) {
    console.log("mongodb not connected: " + error.message); // This will log in case of an error
});

module.exports = mongoose.connection;
