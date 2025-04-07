// HERE WE are reading for an html file

// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200,{'Content-type':'text/html'}); // 200 is the code OK, 403 Not found etc
//     readStream.pipe(res);
// }).listen(3000);
// For a json file
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/example.json');
//     res.writeHead(200,{'Content-type':'application/json'}); // 200 is the code OK, 403 Not found etc
//     readStream.pipe(res);
// }).listen(3000);

// For an image
const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200,{'Content-type':'image/png'}); // 200 is the code OK, 403 Not found etc
    readStream.pipe(res);
}).listen(3000);

