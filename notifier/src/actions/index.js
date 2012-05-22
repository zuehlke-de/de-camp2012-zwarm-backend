/**
 * Called if a notification has been received by the socket.io server<
 * @param data
 */
exports.processNotification = function (data) {
    console.log("Recevied notification: %s", JSON.stringify(data));
};