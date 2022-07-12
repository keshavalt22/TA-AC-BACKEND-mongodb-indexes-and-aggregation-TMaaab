var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String},
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    address: {
        city: {type: String},
        state: {type: String},
        country: {type: String},
        pincode: {type: Number}
    }
});


userSchema.index({country: 1, state: 1}, {unique: true});

module.exports = mongoose.model('User', userSchema);