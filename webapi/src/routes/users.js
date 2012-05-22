var n = require('nimble');

// radius for nearby users in meters
var default_radius = 500,
    minimum_radius = 1;

/**
 * Create new user
 */
exports.create = function (req, res) {

    var user = req.body,
        requiredFields = ['id', 'nickname', 'platform'],
        isValid = true;

    // check if JSON
    if (!req.is('json')) {
        res.send('Requests must be in JSON format!', 400);
        return;
    }

    // check required fields
    n.each(requiredFields, function (f) {
        isValid = isValid && user[f] !== undefined;
    });
    if (!isValid) {
        res.send("One of the required fields is not set: " + requiredFields.join(", "), 400);
        return;
    }

    // check for semantic correctness
    if (user.id == "") {
        res.send("id must not be empty!", 400);
        return;
    }
    if (user.nickname == "") {
        res.send("nickname must not be empty!", 400);
        return;
    }
    if (!(user.platform === "ios" || user.platform === "android")) {
        res.send("platform must be one of ios or android!", 400);
        return;
    }

    // store user in database
    user.doctype = 'user';
    db.save(user.id, user, function (err) {

        if (err) {
            console.log("Create user: could not store user: %s\n-> %s", JSON.stringify(err), JSON.stringify(user));
            res.send("Could not store user!", 500);
            return;
        }

        // signal creation
        delete user._rev;
        delete user.doctype;
        res.json(user, 201);
        console.log("Create user: User created: %s (%s)", user.id, user.nickname);
    });
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