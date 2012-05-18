var S = require("mustache").to_html;

// get json or html representation of api root
app.get("/", function (req, res) {
    var routes = (app.routes.routes.get || [])
        .concat(app.routes.routes.post || [])
        .concat(app.routes.routes.put || [])
        .concat(app.routes.routes.delete || []),
        data = {
            "app": {
                "name": "Zühlke Zwarm Web API",
                "version": "0.0.1"
            }
        };

    if (req.accepts('text/html')) {
        res.render('index', {
            "data": data,
            "title": data.app.name,
            "links": S(
                '<table><tbody>{{#routes}}<tr><td><a href="{{path}}">{{path}}</a></td><td>{{method}}</</td></tr>{{/routes}}</tbody></table>',
                { "routes": routes }
            )});
    } else if (req.accepts('application/json')) {
        data['links'] = routes;
        res.json(data);
    } else {
        res.send(406);
    }
});
