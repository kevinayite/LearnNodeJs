const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // need to be install by npm install body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'static','index.html'))
});


app.post('/', (req,res)=>{
    console.log(req.body);
    // database work here
    res.json({success: true});
});
app.listen(3000);

// In these codes, we are just doing sending requests and display something on the screen