// get a list of all zwarm defs
app.get("/zwarmdefs", function (req, res) {
    res.json([
        {
            '_id': null,
        }
    ]);
});

// create a new zwarmdef
app.post("/zwarmdefs", function (req, res) {
    console.log("new zwarmdef created");
    res.redirect("/zwarmdefs/:newid");
});

// get data for a single zwarmdef
app.get("/zwarmdefs/:id", function (req, res) {
    res.json({
        '_id': null,
        "links": {
            "zwarms": "/zwarmdefs/" + req.params.id + "/zwarms"
        }
    });
});

// update a single zwarmdef
app.put("/zwarmdefs/:id", function (res, req) {
    console.log("updated zwarmdef %s", req.params.id);
    res.redirect("/zwarmdefs/" + req.params.id);
});
