const express = require("express");
const path = require('path');
const app = express();
app.use('/public', express.static(path.join(__dirname,'static'))); // using middleware
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'static','index.html'))
});
app.listen(3000);

// Briefly this his method is used so that the client side won't know where exactly the static files are stored on the serverr
// for more explanations chech the notepad file