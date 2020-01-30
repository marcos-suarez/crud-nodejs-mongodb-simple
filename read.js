var assert = require("assert");
// CONNECTION
var mongoose = require('mongoose');
// MODEL SCHEMA
var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    dob: Date,
    address: String,
    phone: String,
    role: String
});
//MODEL INSTANCE
var user = new mongoose.model('User', schema);
var url = 'mongodb://localhost/crud01';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connection establishment
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

var user = mongoose.model('User');

var query = {username: "abc@example.com"};

var service = {
    findUser: function (query, callback) {
        return user.findOne(query, callback);

    }
};

service.findUser = function (query, callback) {
    return user.findOne(query, callback);
}

var foo = service.findUser(query, function (error, response) {
    if (error) {
        console.log(error);
        return;
    }
    if (!response) {
        console.log('No Data Found');
        return;
    }
        assert.equal("abc@example.com", response.username);
        console.log("PASSOU");
        return;
});

