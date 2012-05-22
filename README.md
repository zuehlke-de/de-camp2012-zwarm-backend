zwarm-backend
=============

The sources for the Backend of the Zühlke Zwarm Camp 2012 application

# Data formats #

## Location ##

MIME-Type: application/vnd.zwarm.location

    {
        "timestamp": <milliseconds since 1.1.1970>, // {Number}
        "latitude": <latitude of geo location>, // {Number}
        "longitude": <longitude of geo location>, // {Number}
    }

## Users ##

MIME-Type: application/vnd.zwarm.user

    {
        "id": "<uuid>", // {String}
        "nickname": "<nick name of user>", // {String}
        "platform": "ios|android", // {String}
        "notificationToken": "<platform specific device/user identification>", {String}
        "location": { ... }, // {Location}
        "nearbyUsers": [
            {
                "nickname": "<nick name of users>", // {String}
                "location": { ... } // {Location}
            },
            ...
        ]
    }

## Swarm ##

MIME-Type: application/vnd.zwarm.swarm

    {

    }

## Swarm Definition ##

MIME-Type: application/vnd.zwarm.swarmdefinition

    {
        "id": "<uuid>", // {String}
        "title": "<Title of Swarm Definition>", // {String}
        "task": "<What to do when the swarm triggers>", // {String}
        "minParticipants", "<Minimum number of participants>", // {Number}
        "maxParticipants", "<Maximum number of participants>", // {Number}
        "radius": "<Swarm radius in meters>", // {Number}
        "waitingTime": "<Time to wait between swarm detection and swarm start in seconds>", // {Number}
        "duration": "<Duration of the swarm in seconds>", // {Number}
        "validFrom": "<Date from which the swarm is valid, milliseconds since 1.1.1970>", // {Number}
        "validUntil": "<Date until which the swarm is valid, milliseconds since 1.1.1970>" // {Number}
        "swarms:
    }