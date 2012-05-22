var algo_port = 4712,
    notifier_node_address = "http://localhost:4713",
    ioclient= require('socket.io-client'),
    io = require('socket.io').listen(algo_port, function () {
        console.log("ZwarmApp algo server listening on port %d", algo_port);
        connectToNotifierNode();
    });

var actions = require("./actions");

GLOBAL.notifier_socket = undefined;

var connectToNotifierNode = function () {

    console.log("Connecting to notifier node: %s", notifier_node_address);
    notifier_socket = ioclient.connect(notifier_node_address);

    notifier_socket.on('connect', function () {
       console.log("Connected to notifier node");
    });

    notifier_socket.on('disconnect', function () {
       console.log("Disconnected from notifier node. Trying reconnect...");
    });
};

io.sockets.on('connection', function (socket) {

    var description = socket.id;

    console.log("Client connected: %s", description);

    // called if a new location was received
    socket.on('location', actions.locationReceived);

    // called if an update of a swarm definition was received
    socket.on('swarmDefinition', actions.swarmDefinitionUpdateReceived);

    // called if a client disconnected
    socket.on('disconnect', function () {
        console.log('Client disconnected: %s', description);
    });
});

