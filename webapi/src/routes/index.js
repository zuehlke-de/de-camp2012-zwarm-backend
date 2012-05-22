var S = require("mustache").to_html;

/*
 * GET home page.
 */

exports.index = function(req, res){

    // construct array of all routes
    var routes = (app.routes.routes.get || [])
            .concat(app.routes.routes.post || [])
            .concat(app.routes.routes.put || [])
            .concat(app.routes.routes.delete || []),
        data = {
            "app": {
                "name": "ZwarmApp Web API",
                "version": "0.0.1"
            }
        };

    if (req.accepts('text/html')) {

        // render html template
        res.render('index', {
            "data": data,
            "title": data.app.name,
            "links": S(
                '<table><tbody>{{#routes}}<tr><td><a href="{{path}}">{{path}}</a></td><td>{{method}}</td></tr>{{/routes}}</tbody></table>',
                { "routes": routes }
            )});

    } else if (req.accepts('application/json')) {

        // send json representation
        data['links'] = routes;
        res.json(data);

    } else {

        // unsupported format
        res.send(406);
    }
};

exports.users = require('./users.js');
exports.swarmDefinitions = require('./swarmDefinitions.js');
exports.swarms = require('./swarms.js');
