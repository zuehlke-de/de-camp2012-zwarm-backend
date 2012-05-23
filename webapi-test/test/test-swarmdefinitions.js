/**
 * Created with JetBrains WebStorm.
 * User: swarm
 * Date: 22.05.12
 * Time: 16:53
 * To change this template use File | Settings | File Templates.
 */

var swarmdefinitionsrequests = require('../util/webapi-swarmdefinitions-request')

var day = new Date().getDay();

exports.swarmdefinitions = function (test)
{
    // create swarmdefinition
    swarmdefinitionsrequests.create({id: '0001', title: 'Hail to the whale', task: 'state \'Hail to the whale \'', ownerId: '1000', minParticipants: 20, maxParticipants: 2000, radius:400, waitingTime: 300, duration: 1200, validFrom: new Date(2012, 05, day, 09, 00, 00).getMilliseconds()
        , validTo: new Date(2012, 05, day + 1, 09, 00, 00).getMilliseconds()}, function (statusCode){
        test.equals(statusCode,200);
    });
    swarmdefinitionsrequests.create({id: '0002', title: 'Sushi goes Burger', task: 'get 5 people together and order 2 burgers for 1', ownerId: '1001', minParticipants: 5, maxParticipants: 5, radius:200, waitingTime: 300, duration: 300, validFrom: new Date(2012, 05, day, 11, 57, 00).getMilliseconds()
        , validTo: new Date(2012, 05, day, 12, 03, 00).getMilliseconds()}, function (statusCode){
        test.equals(statusCode,200);
    });
    swarmdefinitionsrequests.create({id: '0003', title: 'zwarmed FlashMob', task: 'FREEZE!', ownerId: '1002', minParticipants: 1, maxParticipants: 5000, radius:50, waitingTime: 300, duration: 60, validFrom: new Date(2012, 05, day, 10, 00, 00).getMilliseconds()
        , validTo: new Date(2012, 05, day, 10, 00, 00).getMilliseconds()}, function (statusCode){
        test.equals(statusCode,200);
        test.done();
    });
};