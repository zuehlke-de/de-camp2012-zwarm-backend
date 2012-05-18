// get all zwarms
app.get("/zwarms/:id", function (req, res) {
    res.json({
            '_id': req.params.id,
            'links': {
                'geopositions': "/zwarms/:id/gepositions"
            }
        });
});

// signal swarm participation
app.post('/zwarms/:id/users', function (req, res) {
    res.send(201);
});

// add comment to swarm
app.post('/zwarms/:id/comments', function (req, res) {
    res.send(201);
});

// get all zwarms for a single zwarmdef
app.get("/zwarmdefs/:id/zwarms", function (req, res) {
    res.json([
        {
            '_id': null,
            'links': {
                'geopositions': "/zwarms/:id/gepositions"
            }
        }
    ]);
});
