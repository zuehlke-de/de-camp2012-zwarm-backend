var default_limit = 10,
    min_participants = 2,
    min_radius = 1, max_radius = 500,
    min_waiting_time = 1, max_waiting_time = 86400,
    min_valid_from = 0,
    min_duration = 1, max_duration = 86400,
    min_validity_time = 3600 * 1000,
    nimble = require('nimble');

/**
 * Get a list of all swarm definitions
 * The query parameter type selects the view to fetch
 *
 * @param req The parsed http request
 * @param res The response object
 */
exports.getAll = function (req, res) {

    var valid_types = ['past', 'upcoming', 'owned', 'participated'],
        default_type = 'upcoming',
        ofs = parseInt(req.query['offset']),
        limit = parseInt(req.query['limit']),
        type = req.query['type'] || default_type,
        view_name, view_opts;

    // check validity of paging parameters
    if (isNaN(ofs) || ofs < 0) ofs = 0;
    if (isNaN(limit) || limit < 1) limit = default_limit;

    // check validity of type parameter
    switch (type) {
        case "past":
            view_name = "swarmdefinitions/past";
            break;
        case "upcoming":
            view_name = "swarmdefinitions/upcoming";
            break;
        case "owned":
            view_name = "swarmdefinitions/owned";
            break;
        default:
            res.send("Invalid type parameter "+type+". Must be one of: " + valid_types.join(", "), 400);
            return;
    }

    console.log("Querying swarm definitions (offset = %d, limit = %d)", ofs, limit);
    db.view(view_name, view_opts, function (err, result) {

        if (err) {
            console.log("Get all swarm definitions. ERROR(couchdb): %s", JSON.stringify(err));
            res.send("Error while searching swarm definitions", 500);
            return;
        }

        // send ok
        res.send(200);
    });
};

/**
 * Called if a new Swarm Definition is created
 * @param req
 * @param res
 */
exports.create = function (req, res) {

    var requiredFields = ['ownerId', 'title', 'task', 'minParticipants', 'radius', 'waitingTime', 'validFrom', 'duration'],
        def, isValid;

    // require JSON
    if (!req.is('application/json')) {
        console.log("Did not receive JSON.");
        res.send(400);
        return;
    }

    // check for required fields
    def = req.body;
    isValid = true;
    nimble.each(requiredFields, function (f) {
        isValid = isValid && def[f] !== undefined;
    });
    if (!isValid) {
        console.log();
        res.send("One or more required field not found: " + requiredFields.join(", "), 400);
        return;
    }

    // check semantic correctness
    if (def.ownerId == "") {
        res.send("ownerId must not be empty!", 400);
        return;
    }
    if (def.title == "") {
        res.send("title must not be empty!", 400);
        return;
    }
    if (def.task == "") {
        res.send("task must not be empty!", 400);
        return;
    }
    if (def.minParticipants < min_participants) {
        res.send("minParticipants must be >= " + min_participants, 400);
        return;
    }
    if (!(min_radius <= def.radius && def.radius <= max_radius)) {
        res.send("radius must be between " + min_radius + " and " + max_radius, 400);
        return;
    }
    if (!(min_waiting_time <= def.waitingTime && def.waitingTime <= max_waiting_time)) {
        res.send("waitingTime must be between " + min_waiting_time + " and " + max_waiting_time, 400);
        return;
    }
    if (def.validFrom < min_valid_from) {
        res.send("validFrom must be >= " + min_valid_from, 400);
        return;
    }
    if (!(min_duration <= def.duration && def.duration <= max_duration)) {
        res.send("duration must be between " + min_duration + " and " + max_duration, 400);
        return;
    }
    if (def.maxParticipants !== undefined && def.maxParticipants < def.minParticipants) {
        res.send("maxParticipants must greator or equal than minParticipants", 400);
        return;
    }
    if (def.validFrom !== undefined && def.validUntil !== undefined) {
        if (def.validUntil - def.validFrom < min_validity_time) {
            res.send("validity time must be at least " + min_validity_time + "ms", 400);
            return;
        }
    }

    // add as new document to database
    def.doctype = 'swarmdefinition';
    def.created = (new Date()).getTime();
    db.save(def, function (err, result) {

        if (err) {
            console.log(
                "Create swarm definition: Could not save swarm definition due to: %s-> \n%s",
                JSON.stringify(err),
                JSON.stringify(def));
            res.send("Could not save swarm definition", 500);
            return;
        }

        // send created
        def.id = result.id;
        delete def.doctype;
        res.json(def, 201);
        console.log("Create swarm definition: swarm definiton created: %s", def.id);
    });
};

exports.get = function (req, res) {
    res.send(200);
};

exports.update = function (req, res) {
    res.send(200);
};

/**
 * get all swarms for a swarm definitions
 * @param req
 * @param res
 */
exports.getAllSwarms = function (req, res) {
    res.send(200);
};