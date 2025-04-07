// const http = require('http');
// const server = http.createServer((req,res)=>{

//     res.write('Hello world from nodejs');
//     res.end();
// });

// server.listen('3000');// to test it u can open your browser and type the following http://localhost:3000/

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){ // the content of the if will be executed only if we are calling from the root
        res.write('Hello world from nodejs');
        res.end();
    }
    else{
        res.write('using some other domains');
        res.end();
    }    
});

server.listen('3000'); //Activates the server, making it ready to receive requests

// Stop the server after 10 seconds (example)
// setTimeout(() => {
//     server.close(() => {
//         console.log('Server has been stopped.');
//     });
// }, 10000);