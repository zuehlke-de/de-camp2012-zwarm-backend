zwarm-backend
=============

The sources for the Backend of the Zühlke Zwarm Camp 2012 application

# Server #

host: ec2-54-247-155-88.eu-west-1.compute.amazonaws.com
port: 4711

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

## Comment ##

MIME-Type: application/vnd.zwarm.comment

    {
        "timestamp": "<Creation time, milliseconds since 1.1.1970>", // {Number}
        "text": "<The comment text>", // {String}
        "userNickname": "<The nickname of the comment author>" // {String}
    }

## Swarm ##

MIME-Type: application/vnd.zwarm.swarm

    {
        "id": "<uuid>", // {String}
        "swarmDefinitionId": "<id of swarm definition>", // {String}
        "invitationCount": "<The number of invited users>", // {Number}
        "commentCount": "<The number of comments>", // {Number}
        "center" : { ... } "<The center location of the swarm>", // {Location}
        "invitationTime" : "<Date of invitation, milliseconds since 1.1.1970>"
        "city" : "<The city which host the center location>", // {String}
        "participants": { ... } // {User}
        "comments": { ... } // {Comment}
    }

## Swarm Definition ##

MIME-Type: application/vnd.zwarm.swarmdefinition

    {
        "id": "<uuid>", // {String}
        "title": "<Title of Swarm Definition>", // {String}
        "task": "<What to do when the swarm triggers>", // {String}
        "ownerId": "<The id of the swarmdefinition owner>", // {Number}
        "minParticipants", "<Minimum number of participants>", // {Number}
        "maxParticipants", "<Maximum number of participants>", // {Number}
        "radius": "<Swarm radius in meters>", // {Number}
        "waitingTime": "<Time to wait between swarm detection and swarm start in seconds>", // {Number}
        "duration": "<Duration of the swarm in seconds>", // {Number}
        "validFrom": "<Date from which the swarm is valid, milliseconds since 1.1.1970>", // {Number}
        "validUntil": "<Date until which the swarm is valid, milliseconds since 1.1.1970>" // {Number}
        "swarmCount": "<The number of swarms>", // {Number}
        "swarms": { ... } // {Swarm}
    }

## Route Definitions ##

Route /swarmdefinitions

    query parameters:
        type: [upcoming|past|owned|participated]
        user: <uuid>

    return type: application/vnd.zwarm.swarmdefinition

        {
            "id",
            "title",
            "swarmCount"
        }

Route /swarmdefinitions/:id/swarms

    return type: application/vnd.zwarm.swarmdefinition

        {
            "id",
            "swarms": [
                {
                    "id",
                    "invitationTime",
                    "commentCount"
                }
                ...
            ]
        }



