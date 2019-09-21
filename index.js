var express = require('express');
var expressWs = require('express-ws');
const { setup } = require('radiks-server');
const https = require('https');
const fs = require('fs');

var app = express();
app.server = https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'foobar'
}, app)
expressWs(app, app.server);

setup().then(RadiksController => {
  app.use('/radiks', RadiksController);
});

// we will pass our 'app' to 'https' server
app.server.listen(1260, '0.0.0.0');
