// Express web framework
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/example', (req,res)=>{
    res.send('Hitting example route');
});
app.listen(3000);

// app.get('/example/:name/:age', (req,res)=>{
//     console.log(req.params);
//     res.send(req.params.name + " : " + req.params.age);
// });
app.get('/example/:name/:age', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age); // I use it when it is a must parameter
}); // for this example when we are using the following url=http://localhost:3000/example/pedro/99?tutorial=%20tutorialparams
// query which was an empty object changes
// to add more values, we use the '&' http://localhost:3000/example/pedro/99?tutorial=%20tutorialparams&sort=byage


// query string parameter for optional settings

