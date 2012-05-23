// our certificate and key for accessing the Apple Push Notification Service
var certificate="Bag Attributes\n"
    +"friendlyName: Apple Development IOS Push Services: com.zuehlke.zwarm\n"
    +"localKeyID: 68 65 93 8D 7C 3B 4B 59 29 DF C2 5F 74 53 89 63 E2 65 3D 0C\n"
    +"subject=/UID=com.zuehlke.zwarm/CN=Apple Development IOS Push Services: com.zuehlke.zwarm/C=DE\n"
    +"issuer=/C=US/O=Apple Inc./OU=Apple Worldwide Developer Relations/CN=Apple Worldwide Developer Relations Certification Authority\n"
    +"-----BEGIN CERTIFICATE-----\n"
    +"MIIFcTCCBFmgAwIBAgIIXxkN4/h/o7kwDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV\n"
    +"BAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3Js\n"
    +"ZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3\n"
    +"aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkw\n"
    +"HhcNMTIwNTIyMTU0MDMwWhcNMTMwNTIyMTU0MDMwWjBxMSEwHwYKCZImiZPyLGQB\n"
    +"AQwRY29tLnp1ZWhsa2Uuendhcm0xPzA9BgNVBAMMNkFwcGxlIERldmVsb3BtZW50\n"
    +"IElPUyBQdXNoIFNlcnZpY2VzOiBjb20uenVlaGxrZS56d2FybTELMAkGA1UEBhMC\n"
    +"REUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCzXYVIo3dTRVuvwUFi\n"
    +"Ggh2QOjuRgtYUnH3cgFn8i1M8VKwOWiiHBe33Ev2JM5INUuuXDmSFmgwhekeaoAd\n"
    +"9XMhZ/PlYt7QpPHyTxdoIlopPD0ia5BKX2Njt8YTbQAHkfPGdssqqWFm+xcpv1lm\n"
    +"He/ojqEQSl6/RZ3PFiafT+euocGtN243x9r2BiSCi3wJhmZYb/OCBG+fCocUNUtr\n"
    +"JC/CDVGerjSBHiUl5pCyKDqvEqe0qYd6ckJyGG1KRplU5P6iw5Wj232vzXIxW8Ys\n"
    +"1j4Vw8P9ICt021oXjKLQYRTcG4ok12lZ9e6xBmE7CoZ10r1xL9EFZfsd2luUhFPW\n"
    +"l6RhAgMBAAGjggHlMIIB4TAdBgNVHQ4EFgQUaGWTjXw7S1kp38JfdFOJY+JlPQww\n"
    +"CQYDVR0TBAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAQ8G\n"
    +"A1UdIASCAQYwggECMIH/BgkqhkiG92NkBQEwgfEwgcMGCCsGAQUFBwICMIG2DIGz\n"
    +"UmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1l\n"
    +"cyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVy\n"
    +"bXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5k\n"
    +"IGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wKQYIKwYBBQUHAgEW\n"
    +"HWh0dHA6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvME0GA1UdHwRGMEQwQqBAoD6G\n"
    +"PGh0dHA6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2NlcnRpZmljYXRpb25hdXRob3Jp\n"
    +"dHkvd3dkcmNhLmNybDALBgNVHQ8EBAMCB4AwEwYDVR0lBAwwCgYIKwYBBQUHAwIw\n"
    +"EAYKKoZIhvdjZAYDAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAGoHOjW8fO/RXPz2\n"
    +"XiyBHYGUBL4NNqPPyo+LP1ILaJzYNlDFK9g8YJimq3cz0nrDM5qG/lwXrkfDz51K\n"
    +"9Cx6WiGWb/huk/bSjhCn1ly6aEcFtLkU4vAV7EjgHQUXboMXARIIRQcuqxWqFjmk\n"
    +"ZtphoVgR0Mqn5BJP1N7HTvcjmdme6ujbTYx7stjuEE8+FJaF+ZlBQti0L5aOTWkn\n"
    +"rJc45NtqoAHefBaFGq5a+hUkRMFrcN+Es8jnwAiv0e+9vTEWql5kLu2i+xJj5Jf4\n"
    +"Q3iEXSld78vH7pcfFXmleko4vu/tCgyys49j+pzpsLOKambnYnMbxnyOMHgUrpA2\n"
    +"+x+puJc=\n"
    +"-----END CERTIFICATE-----\n";

var key= "-----BEGIN RSA PRIVATE KEY-----\n"
    +"MIIEogIBAAKCAQEAs12FSKN3U0Vbr8FBYhoIdkDo7kYLWFJx93IBZ/ItTPFSsDlo\n"
    +"ohwXt9xL9iTOSDVLrlw5khZoMIXpHmqAHfVzIWfz5WLe0KTx8k8XaCJaKTw9ImuQ\n"
    +"Sl9jY7fGE20AB5HzxnbLKqlhZvsXKb9ZZh3v6I6hEEpev0WdzxYmn0/nrqHBrTdu\n"
    +"N8fa9gYkgot8CYZmWG/zggRvnwqHFDVLayQvwg1Rnq40gR4lJeaQsig6rxKntKmH\n"
    +"enJCchhtSkaZVOT+osOVo9t9r81yMVvGLNY+FcPD/SArdNtaF4yi0GEU3BuKJNdp\n"
    +"WfXusQZhOwqGddK9cS/RBWX7HdpblIRT1pekYQIDAQABAoIBAF3ZeirGtWHRsaal\n"
    +"lMNy4aiWUAqUhc0h3lXdxhSQZ9mRj3V7pF7mGhbu4qQZIAIyOLYztT/WD5AMES0E\n"
    +"BqMmUaZSERCeCf3bwGjLr3CiQNDAnzBKXcY8YPHFL5PsfY54dLgMYkOhOsC6cqU6\n"
    +"ZNmEoonpTycJ8sdb8rVvXqgPFCePxNbD0iSIgdkCzhIGS64fz4rwabb8bk8MMXSY\n"
    +"GMvDUskC37CuBLNFHm0CFxl79rpKmdpFoNB89c2JPdFvt4rn1/PSPAoqzkMARtEG\n"
    +"KeaKl5LvNaIM+AAXnw4OKLtrOFS3Hk9pb1k24JchYHZVJbPUn6NUFTJvWnUVmwNp\n"
    +"EDSk+n0CgYEA5WBVodiYQPcwUz9ZpZoRO9aNuTut9Swc7rnpvbleYMl9tO8xYYC9\n"
    +"eUR3M+m94q42CFMQ2IsJ3SR1Jq8MHlYx01p9NsDyarqhexqxoElUHE31U/t8buoy\n"
    +"mgzYKqBUa2TIryxEV5I54PIz5iBQ77QPvC/17kFZ6MDQ9kmnBUO6G+MCgYEAyC8q\n"
    +"EprQzTR8KdeTl+LbIAUqRb8L8L5yDVEIpQZ0ATYb90pTFtLTC54P9bWtLlJM+FV0\n"
    +"Mt9UKXiOhN8Ez56OW5B3C/5mTgx3tEcC75oHb3KiSilpT5yhqg7r32bPM0PcSbAn\n"
    +"RtNINI0UZ4gv8IAAx07M7h3zQ76aYfpGDvZTuesCgYArPtJmRTPPa8tMprD8K+P7\n"
    +"6COoPLw7cSmzSJHtFznX/aUZq88fluoiJupiezs1taqyPxb5/JzLeMgtlust/Qo/\n"
    +"0tuwqwgJX056qzm6Apk9DOWoA84eC0GnEazfvIKuDL5ZaHsqF4OaCZAHXyhjSQt+\n"
    +"a3xugxu0akX7aT94GqDICQKBgGDLdXODilz++N6ej45Mshm8haEt7I8e9zT7Lsvk\n"
    +"3+jKCiG7vYt2q3edmSf9Dd0tDGyznTkQBbj7wyX6VHAzwbACnZ2eCEfK/YKdJ41F\n"
    +"lDzOWCy182b8XKtHBcSDCMNIF9dFpug3N125rdkV3+BRdI7qymqE7uCd5DZl9sQ7\n"
    +"VWa7AoGAUog7otFrZU0yt9lsLjrobUQmWGy0gs1cLjiEO/KT2OPO+UOIO/9RSCzZ\n"
    +"DDrmR206lPafslEnSwm8uYuWNR4b+K8bkIB2dU0kY72hYhCCrDpzMo5taqj/2E/L\n"
    +"Au7/a02E3i7aG1AKWDjDxutLsv16EI21tZq+moO2V98Ww6ilUkI=\n"
    +"-----END RSA PRIVATE KEY-----\n";

// for debugging, use local source
// var apns = require('./apn-src/apn');
var apns = require('apn');
var util = require('util');

// the connection to the apns
var connection;
var feedback;

/**
 * Connect to apns for the ZwarmApp
 */
exports.connectToApns = function() {

    // create the connection
    var options= {
        certData: certificate,
        keyData: key,
        errorCallback: apnErrorCallback
    };
    connection= new apns.connection(options);

    // create a feedback hook that polls for failures from apple
    var fb= function(time, dev) {
        var token = dev.token.toString('hex');
        console.log("APNS service failed to deliver notification: "+time+", "+token);
    };
    options = {
        certData: certificate,
        keyData: key,
        feedback: fb,                    /* enable feedback service, set to callback */
        interval: 60                      /* interval in seconds to connect to feedback service */
    };
    feedback = new apns.Feedback(options);
};

// a function to be used as a callback in the event that the push notification service has any errors
var apnErrorCallback = function(errorCode, note) {
    console.log("APNS call failed, error code: " + errorCode + ", Note: " + util.inspect(note));
};


/**
 * send notification to apple apns
 * request needs to contain:
 *  - deviceToken
 *  - notificationText
 *  - [payload]
 *  - badgeNumber (int)
 *  - sound
 */
exports.notifyApplePushNotificationService = function(data) {
    var errs= connection.sendNotification(createNotification(data));
    if (errs) {
        console.log("Failed to send notification: "+errs);
    }
};

// a function used to create a Notification object from a hash of parameters
var createNotification = function(params) {
    var note = new apns.notification();
    note.device = new apns.device(params.deviceToken);
    note.alert = params.notificationText;
    if (params.payload) {
        note.payload = {
            'info': params.payload
        }
    }
    note.badge = parseInt(params.badgeNumber, 10);
    note.sound = params.sound;
    return note;
};
