var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// connect to database

var username = "user";
var password = "password";
var address = "xyx";

//connect();

function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect();
}


function disconnect() {
	mongoose.disconnect();
}

