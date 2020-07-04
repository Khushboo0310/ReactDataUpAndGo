//Express is required for creating Node.js based web apps
var express = require('express');

var fs = require('fs');

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
    fs.readFile('./employee.json', 'utf-8', function (err, data) {
        if (err) throw err

        var arrayOfObjects = JSON.parse(data);
        res.send(JSON.stringify(arrayOfObjects));
    })   
});

app.post('/api/data', function(req, res){
    var data = "";
    console.log("Getting User data: " +
        JSON.stringify(req.body));

    fs.readFile('./employee.json', 'utf-8', function (err, data) {
        if (err) throw err

        var arrayOfObjects = JSON.parse(data);
        console.log("BEFORE ADDING TO THE TEMP JSON : " + arrayOfObjects.students);
        arrayOfObjects.students.push((req.body));

        console.log("AFTER ADDING TO THE TEMP JSON : "+arrayOfObjects.students);

        fs.writeFile('./employee.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
            console.log("DONE!!!!")
            res.send(JSON.stringify("FROM SERVER : Data POSTED Successfully!!"));
        })
    })
});