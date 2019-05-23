//jshint esversion:6 

const mongoose = require('mongoose');
const devConnectionString = '';
const db = mongoose.connection; 

mongoose.connect(process.env.DATABASE_URL || devConnectionString, {
    useNewUrlParser: true
});

// database connection event
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});
db.on('connected', () => {
    console.log(`Database Server: ${db.host} connected on port ${db.port}`);
});

db.on('error', (err) => {
    console.log(`The Database Server Threw an Error: ${err}`);
});

module.exports = mongoose;