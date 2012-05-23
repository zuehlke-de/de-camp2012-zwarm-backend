var cradle = require('cradle'),
    db_host = 'localhost',
    db_port = 5984,
    db_name = 'zwarmapp';

// setup cradle
cradle.setup({
    host: db_host,
    port: db_port,
    cache: true,
    raw: false
});

// get db connection
var db = new (cradle.Connection)().database(db_name);

// check if the couch db instance exists and create it if necessary
db.exists(function (err, exists) {
    if (err) {
        console.log("Error while checking for database existence: %s", err);
        return;
    } else if (exists) {
        console.log("The database %s already exists.", db.name);
    } else {
        console.log("Database %s doesn't exist. Creating it...", db.name);
        db.create(function () {
            console.log("Database %s created.", db.name);
        });
    }

    createDesignDocuments();
});

// create views for querying swarm definitions
var createDesignDocuments = function () {
    db.save('_design/swarmdefinitions', {
        count: {
            map: function (doc) {
                if (doc.doctype === 'swarmdefinition') {
                    emit(doc._id, 1);
                }
            },
            reduce: function (k, v) {
                return sum(v);
            }
        },
        upcoming: {
            map: function (doc) {

                var now = (new Date()).getTime();

                if (doc.doctype === 'swarmdefinition') {
                    if (doc.validUntil === undefined || doc.validUntil >= now) {
                        emit([doc.created || now, doc._id], { id: doc._id, title: doc.title });
                    }
                }
            }
        },
        owned: {
            map: function (doc) {

                var now = (new Date()).getTime();

                if (doc.doctype === 'swarmdefinition') {
                    emit([doc.ownerId || "_zaphod_beeblebrox", doc._id, doc.created || now, 1], { type: 'sd', id: doc.id, title: doc.title, ownerId: doc.ownerId });
                } else if (doc.doctype === 'swarm') {
                    emit([0, doc.swarmDefinitionId, null, 0], { type: 's' });
                }
            },
            reduce: function (keys, values, rereduce) {
                var result = undefined;

                if (rereduce) {
                    values.forEach(function (v) {
                        if (result === undefined) {
                            result = v;
                        } else {
                            result.count += v.count;
                        }
                    });
                } else {
                    result = { title: null, ownerId: null, id: null, count: 0};
                    values.forEach(function (v) {
                       if (v.type === 'sd') {
                           result.title = v.title;
                           result.ownerId = v.ownerId;
                           result.id = v.id;
                       } else {
                           result.count += 1;
                       }
                    });
                }

                return result;
            }
        },
        past : {
            map: function (doc) {
                var now = (new Date()).getTime();

                if (doc.doctype === 'swarmdefinition') {
                    emit([doc.created || now, doc._id, 1], { type: 'sd', time: doc.created || now, id: doc._id, title: doc.title });
                } else if (doc.doctype === 'swarm') {
                    emit([doc.invitationTime || now, doc.swarmDefinitionId, 0], { type: 's', time: doc.invitationTime })
                }
            },
            reduce: function (keys, values, rereduce) {
                var result = undefined;

                if (rereduce) {
                    values.forEach(function (v) {
                        if (result === undefined) {
                            result = v;
                        } else {
                            result.count += v.count;
                        }
                    });
                } else {
                    result = { title: null, time: null, id: null, count: 0 };
                    values.forEach(function (v) {
                        if (v.type === 'sd') {
                            result.id = v.id;
                            if (result.time === null) {
                                result.time = v.time;
                            }
                            result.title = v.title;
                        } else if (v.type === 's') {
                            result.count += 1;
                            if (result.time === null || result.time < v.time) {
                                result.time = v.time;
                            }
                        }
                    });
                }

                return result;
            }
        }
    }, function (err) {
        if (err) {
            console.log("Could not create design document for swarm definitions: %s", JSON.stringify(err));
            return;
        }
        console.log("Created design document for swarm definitions.");
    });

    db.save('_design/swarms', {
        count: {
            map: function (doc) {
                if (doc.doctype === 'swarm') {
                    emit(doc._id, 1);
                }
            },
            reduce: function (k, v) {
                return sum(v);
            }
        },
        all: {
            map: function (doc) {
                if (doc.doctype === 'swarm') {
                    emit([doc.swarmDefinitionId, doc.invitationTime, doc._id, 1], { type: 's', id: doc._id, invitationTime: doc.invitationTime });
                } else if (doc.doctype === 'comments') {
                    emit([0, 0, doc.swarmId, 0], { type: 'c' })
                }
            },
            reduce: function(keys, values, rereduce) {
                var result = undefined;

                if (rereduce) {
                    values.forEach(function (v) {
                        if (result === undefined) {
                            result = v;
                        } else {
                            result.commentCount += v.commentCount;
                        }
                    });
                } else {
                    result = { commentCount : 0 };
                    values.forEach(function (v) {
                        if (v.type === 's') {
                            result.id = v.id;
                            result.invitationTime = v.invitationTime;
                        } else if (v.type === 'c') {
                            result.commentCount += 1;
                        }
                    });
                }

                return result;
            }
        }
    }, function (err) {
        if (err) {
            console.log("Could not create design document for swarms: %s", JSON.stringify(err));
            return;
        }
        console.log("Created design document for swarms.");
    });
};

