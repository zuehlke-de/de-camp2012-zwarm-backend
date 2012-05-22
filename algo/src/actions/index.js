/**
 * Called if a location was received by the node
 * @param data
 */
exports.locationReceived = function (data) {
    console.log("Location received: %s", JSON.stringify(data));
};

exports.swarmDefinitionUpdateReceived = function (data) {
    console.log("Swarm definition update received: %s", JSON.stringify(data));
};