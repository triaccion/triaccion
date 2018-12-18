const port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log((new Date()) + ' Server is listening on port ' + port);

});

app.listen(port);
