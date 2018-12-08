let express = require('express');
let port = process.env.PORT || 3000;
let app = express();

app.use(express.static(__dirname + '/view'))
app.use(express.static(__dirname + '/public/img'))
app.use(express.static(__dirname + '/public/css'))

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(port, function () {
 console.log('Example app listening on port !');
});