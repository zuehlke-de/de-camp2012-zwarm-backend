
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
    , default_server_port = 4711
    , server_port = default_server_port;

var app = module.exports = express.createServer();
GLOBAL.app = app;

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

app.listen(default_server_port, function(){
  console.log("ZwarmApp web api server listening on port %d in %s mode", app.address().port, app.settings.env);
});

