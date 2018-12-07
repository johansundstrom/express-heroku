# Express-Heroku

* installera npm ```sudo apt install npm```
* verifiera npm ```npm -v```
* verifiera node ```node -v```
* installera heroku CLI ```npm install -g heroku```
* skapa katalog och cd in ```mkdir min-app``` och ```cd min-app```
* skapa package.json ```npm init``` och svara på frågorna
* fortsätt i VS code ```code .```
* installera express ```npm i express --save```
* skapa index.js ```touch index.js```
* skriv 
```javascript
let express = require('express');
let port = process.env.PORT || 3000;
let app = express();

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
});

app.listen(port, function () {
 console.log('Example app listening on port !');
});
```
* testa ```node index.js```
* öppna browser på ```localhost:3000```
* redigera package.json så att scriptet "start": "node index.js" finns 
```javascript
 "scripts": {
    "start": "node index.js"
## Heroku
* logga in på heroku ```heroku login```
* skapa plats på heroku ```heroku create```
* flytta upp till heroku ```git push heroku master```
* se resultat ```heroku open```
