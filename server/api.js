var http = require('http');

const requestListener = function (req, res) {
    if(req.method == 'GET' & req.url == "/api/data"){
        res.writeHead(200, { 'access-control-allow-origin': '*','Content-Type': 'application/json' });
        res.write(JSON.stringify({
            "items": [
                { "id": 1, "name": "Apples", "price": "$2" },
                { "id": 2, "name": "Peaches", "price": "$5" }
            ]
        }));
        res.end();
    }
}

const server = http.createServer(requestListener);
server.listen(5555);
console.log("Server Running on 5555..")