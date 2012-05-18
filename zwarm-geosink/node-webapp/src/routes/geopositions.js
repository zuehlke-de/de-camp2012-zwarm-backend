// receive gepositions
// expected JSON format:
// {
//    'user_id' : {String} <uuid>,
//    'nickname' : {String} <nick name>,
//    'lat' : {Number} <latitude>,
//    'lon' : {Number} <longitude>
// }
app.post('/geopostions', function (req, res) {
    res.send(201);
});
