'use strict';

let express = require('express');
let port = process.env.PORT || 3000;
let app = express();
let ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public/img'))
app.use(express.static(__dirname + '/public/css'))


app.get('/', function (req, res) {
    res.sendFile('index.html');
    //res.render('index.ejs');
});

app.listen(port, function () {
 console.log('Example app listening on port ' + port + '!');
});