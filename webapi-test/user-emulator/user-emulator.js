/**
 * Created with JetBrains WebStorm.
 * User: swarm
 * Date: 22.05.12
 * Time: 19:03
 * To change this template use File | Settings | File Templates.
 */
var usersrequest = require('../util/webapi-users-request');
var util = require('./util');

var test_user_count = 1000,
    test_id = util.uuid(),
    devices = new Array('android', 'ios'),
    geolocations = new Array({city: 'Bad Brückenau', latitude: 50.30195, longitude: 9.74822}, {city: 'Hamburg', latitude: 53.541532, longitude:9.990692}, {city: 'Eschborn', latitude: 50.15034, longitude:8.538609}, {city: 'Muenchen', latitude: 48.130809, longitude:11.56929}),
    movement = new Array(-0.001, 0.001, -0.0005, 0.0005),
    idle = new Array(5000, 10000, 15000, 20000);

for(i = test_user_count; i > 0; i--){
    // create user data
    var user_id = util.uuid(),
        user_nickname = test_id + '_' + i.toString(),
        user_platform = devices[util.random(0,1)];
    createUser(user_id, user_nickname, user_platform);
}

function createUser(user_id, user_nickname, user_platform){
    console.log('creating user  [' + user_nickname + ']: nickname:' + user_nickname + ', + platform:' + user_platform + '...');
    // create user
    usersrequest.create({id: user_id, nickname: user_nickname, platform: user_platform}, function (res){
        if(res.statusCode === 201){
            console.log('creation of user [' + user_nickname + '] successful');
            // means user was created, we need to save the user and choose a location
            var initial_geolocation = geolocations[util.random(0, 3)];
            // update the current location on the server
            updateGeoLocation(user_id, user_nickname, initial_geolocation);
        }
        else{
            console.log('creation of user [' + user_nickname + '] failed: ' + res.body);
        }
    });
}

function updateGeoLocation(user_id, user_nickname, current_geolocation){
    console.log('setting geolocation of user [' + user_nickname + '] to [' + current_geolocation.city + '] (' + current_geolocation.latitude + ',' + current_geolocation.longitude + ') ...');
    usersrequest.updateLocation(user_id, {latitude: current_geolocation.latitude, longitude: current_geolocation.longitude, timestamp: new Date().getMilliseconds() }, function (res){
        if(res.statusCode !== 201){
            console.log(res.body);
        }
        // location update was succeessful
        setTimeout(function (){
            var new_latitude = parseFloat(current_geolocation.latitude) + parseFloat( movement[util.random(0,3)]);
            var new_longitude = parseFloat(current_geolocation.longitude) + parseFloat(movement[util.random(0,3)]);
            updateGeoLocation(user_id, user_nickname, {city: current_geolocation.city, latitude: new_latitude.toPrecision(7), longitude: new_longitude.toPrecision(7)})
        }, idle[util.random(0, 3)]);
    });
}