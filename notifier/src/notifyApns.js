// our certificate and key for accessing the Apple Push Notification Service
var certificate="gugus";
var key= "daaa";

var apns = require('apn'),
    util = require('util');

// the connection to the apns
var connection;

/**
 * Connect to apns for the ZwarmApp
 */
exports.connectToApns = function() {
    var options= {
        certData: certificate,
        keyData: key,
        errorCallback: apnErrorCallback
    };
    connection= new apns.connection(options);
};

// a function to be used as a callback in the event that the push notification service has any errors
var apnErrorCallback = function(errorCode, note) {
    console.log("APNS call failed, error code: " + errorCode + ", Note: " + util.inspect(note));
};


/**
 * send notification to apple apns
 * request needs to contain:
 *  - deviceToken
 *  - notificationText
 *  - [payload]
 *  - badgeNumber (int)
 *  - sound
 */
exports.notifyApplePushNotificationService = function(data) {
    connection.sendNotification(createNotification(data));
};

// a function used to create a Notification object from a hash of parameters
var createNotification = function(params) {
    var note = new apns.notification();
    note.device = new apns.device(params.deviceToken);
    note.alert = params.notificationText;
    if (params.payload) {
        note.payload = {
            'info': params.payload
        }
    }
    note.badge = parseInt(params.badgeNumber, 10);
    note.sound = params.sound;
    return note;
};
