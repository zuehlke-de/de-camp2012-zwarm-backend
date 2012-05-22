
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
    , default_server_port = 4711
    , server_port = default_server_port
    , algo_node_address = "http://localhost:4712"
    , io = require('socket.io-client')
    , cradle = require('cradle')
    , db_host = "http://localhost"
    , db_port = 5984
    , db_name = "zwarmapp";

var app = module.exports = express.createServer();

// setup cradle
cradle.setup({
    host: db_host,
    port: db_port,
    cache: true,
    raw: false
});

GLOBAL.app = app;
GLOBAL.algo_socket = undefined;
GLOBAL.db = new(cradle.Connection)().database(db_name);

var connectToAlgoNode = function () {

    console.log("connecting to algo node: %s", algo_node_address);
    algo_socket = io.connect(algo_node_address);

    algo_socket.on('connect', function () {
        console.log("Connected to algo node.");
    });

    algo_socket.on('disconnect', function () {
        console.log("Disconnected from algo node. Trying reconnect...");
    });
};


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

// homepage
app.get('/', routes.index);

// user management
app.post('/users', routes.users.create);
app.put('/users/:id/location', routes.users.updateLocation);
app.get('/users/:id/nearbyUsers', routes.users.getNearbyUsers);

// swarm definition management
app.get('/swarmdefinitions', routes.swarmDefinitions.getAll);
app.post('/swarmdefinitions', routes.swarmDefinitions.create);
app.get('/swarmdefinitions/:id', routes.swarmDefinitions.get);
app.put('/swarmdefinitions/:id', routes.swarmDefinitions.update);
app.get('/swarmdefinitions/:id/swarms', routes.swarmDefinitions.getAllSwarms);

// swarm management
app.get('/swarms/:id', routes.swarms.get);
app.post('/swarms/:id/participants', routes.swarms.participate);
app.post('/swarms/:id/comments', routes.swarms.createComment);
app.get('/swarms/:id/comments', routes.swarms.getAllComments);

// check if the couch db instance exists and create it if necessary
db.exists(function (err, exists) {
    if (err) {
        console.log("Error while checking for database existence: %s", err);
    } else if (exists) {
        console.log("The database %s already exists.", db.name);
    } else {
        console.log("Database %s doesn't exist. Creating it...", db.name);
        db.create(function () {
            console.log("Database %s created.", db.name);
        });
    }
});

// start web api
app.listen(default_server_port, function(){
    console.log("ZwarmApp web api server listening on port %d in %s mode", app.address().port, app.settings.env);
    connectToAlgoNode();
});

