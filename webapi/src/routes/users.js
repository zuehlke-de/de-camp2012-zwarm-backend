// radius for nearby users in meters
var default_radius = 500,
    minimum_radius = 1;

/**
 * Create new user
 */
exports.create = function (req, res) {
    res.send(201);
};

/**
 * Update current location of user
 */
exports.updateLocation = function (req, res) {

    // check if request body is JSON
    if (!req.is('application/json')) {
        res.send(400);
        return;
    }

    // send location update to algo node
    GLOBAL.algo_socket.emit('location', {
        id: req.params.id,
        location: req.body
    });

    res.send(200);
};

/**
 * get all nearby users in the area defined by the current location
 * of the user and a radius, provided with the query parameter radius
 * @param req
 * @param res
 */
exports.getNearbyUsers = function (req, res) {
    var radius = parseFloat(req.query['radius']);

    // check radius parameter
    if (isNaN(radius) || radius < minimum_radius) {
        radius = default_radius;
    }
    console.log("Querying nearby users for user %s in the radius of %d m", req.params.id, radius);

    res.send(200);
};