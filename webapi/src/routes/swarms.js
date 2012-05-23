/**
 * Created with JetBrains WebStorm.
 * User: swarm
 * Date: 22.05.12
 * Time: 09:39
 * To change this template use File | Settings | File Templates.
 */
var n = require('nimble');

/**
 * Get a single swarm instance
 * @param req
 * @param res
 */
exports.get = function (req, res) {
    var swarm_id = req.params.id;
    var swarm = {
        id:swarm_id,
        swarmDefinitionId:'0001',
        invitationCount:13,
        commentCount:4,
        center:{timestamp:new Date(2012, 5, 21, 12, 3, 0).valueOf(), latitude:50.30195, longitude:9.74822},
        invitationTime:new Date(2012, 5, 21, 12, 3, 0).valueOf(),
        city:'Bad Brueckenau'
    };
    res.json(swarm, 200);
};

/**
 * Participate in a swarm instance
 * @param req
 * @param res
 */
exports.participate = function (req, res) {
    var user = req.body,
        swarmId = req.params.id,
        requiredFields = ['id'],
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

    var swarm;

    db.get(swarmId, function (err, doc) {
        if (err) {
            console.log("Participate: Could not find swarm %s: %s", swarmId, JSON.stringify(err));
            res.send("Error while saving participation " + user.id, 500);
            return;
        }
        swarm = doc;
        swarm.participants.push(user);

        db.save(swarmId, swarm, function (err, result) {
            if (err) {
                console.log("Participate: Failed to participate user %s at swarm %s: %s", user.id, swarmId, JSON.stringify(err));
                res.send("Error while saving participation " + user.id, 500);
            } else {
                console.log("Participate: User %s participates swarm %s: %s", user.id, swarmId, result.id);
                res.send(201);
            }
        });
    });
};

/**
 * Add a new comment to a swarm instance
 * @param req
 * @param res
 */
exports.createComment = function (req, res) {
    var comment = req.body,
        swarmId = req.params.id,
        requiredFields = ['text','nickname'],
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
    if (comment.text == "") {
        res.send("text must not be empty!", 400);
        return;
    }

    // check for semantic correctness
    if (comment.nickname == "") {
        res.send("nickname must not be empty!", 400);
        return;
    }

    var swarm;

    db.get(swarmId, function (err, doc) {
        if (err) {
            console.log("Create comment: Could not find swarm %s: %s", swarmId, JSON.stringify(err));
            res.send("Error while saving participation " + comment.text, 500);
        }
        swarm = doc;
        comment.timestamp = new Date().valueOf();
        swarm.comments.push(user);

        db.save(swarmId, swarm, function (err, result) {
            if (err) {
                console.log("Create comment: Failed to create comment %s for swarm %s: %s", comment.test, swarmId, JSON.stringify(err));
                res.send("Error while saving comment " + comment.text, 500);
            } else {
                console.log("Participate: Comment %s added to swarm %s: %s", comment.text, swarmId, result.id);
                res.send(201);
            }
        });
    });
};

/**
 * Get all comments for a swarm instance
 * @param req
 * @param res
 */
exports.getAllComments = function (req, res) {
    var swarm_id = req.params.id;
    var swarm = {
        id:swarm_id,
        comments:[
            {
                timestamp:new Date(2012, 5, 21, 12, 3, 0).valueOf(),
                text:'Wicked fun!',
                userNickname:'Bart'
            },
            {
                timestamp:new Date(2012, 5, 21, 12, 3, 0).valueOf(),
                text:'We had a great time!',
                userNickname:'Lisa'
            },
            {
                timestamp:new Date(2012, 5, 21, 12, 3, 0).valueOf(),
                text:'Hello',
                userNickname:'Moe'
            },
            {
                timestamp:new Date(2012, 5, 21, 12, 3, 0).valueOf(),
                text:'I like this app!',
                userNickname:'Homer'
            }
        ]
    };
    res.json(swarm, 200);
};