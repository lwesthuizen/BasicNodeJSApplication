var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path');

app.use(cors({origin: 'http://localhost:8080'}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'));
app.listen(8080);

console.log("NodeJS server is running on port: 8080");

app.get('*', function(req, res) {
        (path.join(__dirname, '../public/', 'index.html'));
    });

app.post('/', function(req, res){
  res.json({"answer": (req.body.num1 + req.body.num2)});
});

module.exports = app;

// Connect to a MongoDB database
// mongoose.connect("mongodb://localhost:27017/accountsDB");
// var users = mongoose.model('users', {email: String, password: String})
