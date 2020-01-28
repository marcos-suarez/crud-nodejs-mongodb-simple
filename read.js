require('./models/user');
require('./config/connection.js');
var userService = require('./service/user');

//
// read
//
var query = {
    username: "abc@example.com"
};


userService.findUser(query, function (error, response) {
    if (error) {
        console.log(error);
        return;
    }
    if (response) {
        console.log(response);
        return;
    }
    if (!response) {
        console.log('No Data Found');
    }
});