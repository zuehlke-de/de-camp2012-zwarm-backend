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
    res.send(200);
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
}

/**
 * Get all comments for a swarm instance
 * @param req
 * @param res
 */
exports.getAllComments = function (req, res) {
    res.send(200);
};