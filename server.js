var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = process.env.port || 3000;

var Users = require('./routes/Users');

const mongoURI = 'mongodb://localhost:27017/log';

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/users',Users);

mongoose
    .connect(mongoURI,{useNewUrlParser:true , useUnifiedTopology: true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))


    app.listen(port, function(){
        console.log("Server is running on port: " + port);
    })