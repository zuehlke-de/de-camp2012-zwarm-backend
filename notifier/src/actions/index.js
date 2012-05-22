
notifyApns = require('./../notifyApns.js');
notifyC2dm = require('./../notifyC2dm.js');

/**
 * Called if a notification has been received by the socket.io server<
 * @param data
 */
exports.processNotification = function (data) {
    console.log("Recevied notification: %s", JSON.stringify(data));
    var targetPlatform = data.targetPlatform;
    if (targetPlatform == "apn") {
        notifyApns.notifyApplePushNotificationService(data);
    } else {
        notifyC2dm.notifyGoogleC2dm(data);
    }

};