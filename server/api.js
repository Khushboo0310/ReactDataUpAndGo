//Express is required for creating Node.js based web apps
var express = require('express');

//body-parser is used to parse the Request body and populate the req.
var bodyParser = require('body-parser');

// Create Express app
var app = express();

// Setting port no for listening
app.set('port', 9876);
app.use(bodyParser.json());

// To allow CORS - Cross Origin Resrouce Sharing 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});

//RESTful Methods / APIs

app.get('/api/data', function (req, res) {
    res.send(JSON.stringify({
        "students": [
            {
                "id": 1,
                "name": "Khushboo Bhasne",
                "email": "khushboobhasne@gmail.com"
            },
            {
                "id": 2,
                "name": "Prateeksha Dixit",
                "email": "pdixit2094@gmail.com"
            },
            {
                "id": 3,
                "name": "Sudeepta Nath",
                "email": "sudinath@gmail.com"
            }
        ]
    }));
});