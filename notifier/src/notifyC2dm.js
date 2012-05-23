var googleUser='zuehlkeandroid@googlemail.com';
var googlePass='zuehlke4android';
var googleAppName='com.zuehlke.zwarm';
// todo check: message sent to google must be <1024 characters

var C2DM = require('c2dm').C2DM;
var connection;
var sessionToken;

/**
 * Connect to c2dm for the ZwarmApp
 */
exports.connectToC2dm = function() {
    var config = {
        user: googleUser,
        password: googlePass,
        source: googleAppName
    };
    connection= new C2DM(config);
};

/*
 * send notification to Google Android c2dm
 */
exports.notifyGoogleC2dm = function(data) {

    if (!sessionToken) {
        connection.login(function(err, token) {
            if (err) {
                console.log("Failed to log in to c2dm: "+err);
                return;
            }
            sessionToken= token;
        });
    }
    // create the notification and send it
    connection.send(createNotification(data), function(err, messageId){
        if (err) {
            console.log("Sending notification failed: "+err);
        } else {
            console.log("Sent notification to google with message ID: ", messageId);
        }
    });
};

// a function used to create a Notification object from a hash of parameters
var createNotification = function(params) {
    var message = {
        registration_id: params.deviceToken,
        collapse_key: 'ZuehlkeZwarm'
    };
    if (params.payload) {
        params.payload.foreach( function( k, v ) {
            message["data."+k]= v;
        });
    }
    return message;
};
