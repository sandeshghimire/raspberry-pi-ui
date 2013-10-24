var db = require('../lib/db');

var UserSchema = new db.Schema({
	username : {
		type : String,
		unique : true
	},
	password : String
});

var MyUser = db.mongoose.model('User', UserSchema);


// Exports
module.exports.addUser = addUser;

function addUser(username, password, callback) {
	var instance = new MyUser();
	instance.username = username;
	instance.password = password;
	if (err) {
		callback(err);
	} else {
		callback(null, instance);
	}
}
