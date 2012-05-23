var usersrequest = require('../util/webapi-users-request');

exports.users = function (test)
    {
        // create users
        usersrequest.create({id: '1000', nickname: 'Bart Simpson', platform: 'android'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1001', nickname: 'Homer Simpson', platform: 'ios'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1002', nickname: 'Marge Simpson', platform: 'ios'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1003', nickname: 'Abe Simpson', platform: 'ios'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1004', nickname: 'Maggie Simpson', platform: 'ios'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1005', nickname: 'Montgomery Burns', platform: 'ios'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1006', nickname: 'Moe', platform: 'android'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1007', nickname: 'Nick Flanders', platform: 'ios'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });
        usersrequest.create({id: '1008', nickname: 'Smithers', platform: 'android'}, function (res){
            test.equals(res.statusCode,201, res.body);
        });

        var now = new Date().valueOf();
        
        // create initial locations locations
        usersrequest.updateLocation('1000', { timestamp: now, latitude:50.302389, longitude:9.748121 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1001', { timestamp: now, latitude:50.302123, longitude:9.748222 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1002', { timestamp: now, latitude:50.302532, longitude:9.748323 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1003', { timestamp: now, latitude:50.302234, longitude:9.748424 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1004', { timestamp: now, latitude:50.302666, longitude:9.748525 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1005', { timestamp: now, latitude:50.302765, longitude:9.748626 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1006', { timestamp: now, latitude:50.302777, longitude:9.748727 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1007', { timestamp: now, latitude:50.302301, longitude:9.748828 }, function (res){
            test.equals(res.statusCode,200, res.body);
        });
        usersrequest.updateLocation('1008', { timestamp: now, latitude:50.302366, longitude:9.748929 }, function (res){
            test.equals(res.statusCode,200, res.body);
            test.done();
        });
    };