/**
 * Created with JetBrains WebStorm.
 * User: swarm
 * Date: 22.05.12
 * Time: 14:42
 * To change this template use File | Settings | File Templates.
 */
var restify = require("restify");

var client = restify.createJsonClient({
    // url: 'http://ec2-54-247-155-88.eu-west-1.compute.amazonaws.com:4711'
    url: 'http://localhost:4711'
});

exports.create = function (userObject, check) {
    client.post('/users', userObject, function(err, req, res, obj) {
        check(res.statusCode, err);
    });
};

exports.updateLocation = function (userId, location, check) {
    client.put('/users/' + userId + '/location', {id: userId, location: location}, function(err, req, res, obj) {
        check(res.statusCode, err);
    });
}