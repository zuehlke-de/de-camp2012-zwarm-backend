var url = require('url'),
    default_radius = 500,
    min_radius = 1;

// route to get all geopositions for a user and a given radius
// radius in meters is provided by r query parameter, if this is not
// default radius is used
app.get('/users/:id/geopositions', function (req, res) {

    var radius;
    
    // parse radius
    radius = req.query['r'] !== undefined ? parseFloat(req.query['r']) : default_radius;
    if (isNaN(radius) || radius <= min_radius) {
        radius = default_radius;
    }

    res.json({
        '_id' : req.params.id,
        'nickname': null,
        'geopositions': {
            'radius' : radius,
            'count' : 1,
            'positions' : [
                {
                    '_id': null,
                    'time': (new Date()).getTime(),
                    'lat': null,
                    'lon': null
                }
            ]
        }
    });
});
