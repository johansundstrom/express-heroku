# Express-Heroku

* installera npm ```sudo apt install npm```
* verifiera npm ```npm -v```
* verifiera node ```node -v```
* installera heroku CLI ```sudo npm install -g heroku```
* skapa katalog och cd in ```mkdir min-app``` och ```cd min-app```
* skapa package.json ```npm init``` och svara på frågorna
* fortsätt i VS code ```code .```
* skapa .gitignore ```touch .gitignore```
* redigera .gitignore ```/node_modules```
* installera express ```sudo npm i express --save```
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
* redigera package.json så att scriptet "start": "node index.js" finns 
```javascript
 "scripts": {
    "start": "node index.js"
```
* testa att starta ```node index.js```
* öppna browser på ```localhost:3000```
* om allt fungerar...
* ```git add .```
* ```git commit --message "init"```
* ```git push origin master``` logga in och skicka upp


## Heroku
* logga in på heroku ```heroku login```
* skapa plats på heroku ```heroku create```
* flytta upp till heroku ```git push heroku master```
* se resultat ```heroku open```

### Kommunikationsproblem med befintlig Heroku
* Kontrollera Heroku anslutning ```git remote -v```
* Lägg till anslutning ```heroku git:remote -a [heroku-app-namn]```

## DNS
* kopiera url från heroku
* öppna dns-inställningar till webbhotellet och ange namn, "web alias" och url
* prova nya url-en
![DNS inställningar](https://github.com/johansundstrom/express-heroku/blob/master/dns-pill.png)

Gurkorna i Västerås är inte raka
Gurkorna är numera inte böjda längre
