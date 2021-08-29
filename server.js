const express = require('express');
const app =  express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
})

app.get('/login', function (req, res) {
    res.send('login!');
})


app.listen(3000,()=>{
    console.log("listening")
})