// get a list of all zwarm defs
app.get("/swarmdefinitions", function (req, res) {
    res.json([
        {
            '_id': null
        }
    ]);
});

// create a new zwarmdef
app.post("/swarmdefinitions", function (req, res) {
    console.log("new swarm definition created");
    res.redirect("/swarmdefinitions/:newid");
});

// get data for a single zwarmdef
app.get("/swarmdefinitions/:id", function (req, res) {
    res.json({
        '_id': null,
        "links": {
            "zwarms": "/swarmdefinitions/" + req.params.id + "/swarms"
        }
    });
});

// update a single zwarmdef
app.put("/swarmdefinitions/:id", function (res, req) {
    console.log("updated swarm definition %s", req.params.id);
    res.redirect("/swarmdefinitions/" + req.params.id);
});
