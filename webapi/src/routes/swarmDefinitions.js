var default_limit = 10;

/**
 * Get a list of all swarm definitions
 * @param req The parsed http request
 * @param res The response object
 */
exports.getAll = function (req, res) {

    var ofs = parseInt(req.query['offset']),
        limit = parseInt(req.query['limit']);

    // check validity of paging parameters
    if (isNaN(ofs) || ofs < 0) ofs = 0;
    if (isNaN(limit) || limit < 1) limit = default_limit;

    console.log("Querying swarm definitions (offset = %d, limit = %d)", ofs, limit);

    res.send(200);
};

exports.create = function (req, res) {
    res.send(201);
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