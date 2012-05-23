/**
 * Created with JetBrains WebStorm.
 * User: swarm
 * Date: 22.05.12
 * Time: 09:39
 * To change this template use File | Settings | File Templates.
 */

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
    res.send(201);
};

/**
 * Add a new comment to a swarm instance
 * @param req
 * @param res
 */
exports.createComment = function (req, res) {
    res.send(201);
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