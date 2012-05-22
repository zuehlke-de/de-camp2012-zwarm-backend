var notifier_port = 4713,
    io = require('socket.io').listen(notifier_port, function () {
        console.log("ZwarmApp Notifier Node listening on port %d", notifier_port);
    });

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