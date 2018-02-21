'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const SERVERLESS = require("./dist/serverless_lib");
if (typeof SERVERLESS != "function") {
    throw new Error("Webpack still didn't pack the export correctly!");
}

http.createServer(async function (req, res) {
    console.log(req.rawHeaders);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    SERVERLESS(null, null, (unused, response) => {
        res.end(new Buffer(response.body));
    });
}).listen(port);
