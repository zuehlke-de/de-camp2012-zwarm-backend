/**
 * Notifier main app.
 */


// connect to the Apple and Google services
var notifyApns= require('./notifications/notifyApns.js');
notifyApns.connectToApns();

var notifyC2dm= require('./notifications/notifyC2dm.js');
notifyC2dm.connectToC2dm();

// create the listener socket
var notifier_port = 4713,
    io = require('socket.io').listen(notifier_port, function () {
        console.log("ZwarmApp Notifier Node listening on port %d", notifier_port);
    });


// the processNotification function
var actions = require('./actions');

io.sockets.on('connection', function (socket) {

    var description = socket.id;

    console.log("Client connected: %s", description);

    // called if a new swarm was received
    socket.on('swarm', actions.processNotification);

    // called if a client disconnects
    socket.on('disconnect', function () {
        console.log("Client disconnected: %s", description);
    });
});

// test function for apn test
//noinspection JSUnusedGlobalSymbols
var testApn= function() {
    var data= {
        // token iPhone Masa
        deviceToken: "9769c5e7bac72c4a0d5fe6f6f14956484a1c075643a406f2d9bccfdd4605fd7f",
        notificationText: "Hello World",
        badgeNumber: "1",
        sound: "ping.aiff",
        payload: {}
    };
    notifyApns.notifyApplePushNotificationService(data);
    console.log("Sent notification to apple apns.");
};

// test function for C2dn test
//noinspection JSUnusedGlobalSymbols
var testC2dm= function() {
    var data= {
        // token android phone
        deviceToken: "ND15279C45TC8UM0CBSU66B",
        notificationText: "Hello World",
        payload: {}
    };
    notifyC2dm.notifyGoogleC2dm(data);
    console.log("Sent notification to google c2dm.");
};

// testApn();
// testC2dm();
