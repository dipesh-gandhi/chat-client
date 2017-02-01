
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);


var socket = require('socket.io-client')('http://localhost');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
