var express = require('express')
const { setup } = require('radiks-server')
const https = require('https')
const fs = require('fs')

var app = express()
app.server = https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'foobar',
}, app)

setup().then(RadiksController => {
  app.use('/radiks', RadiksController)
})

app.get('/ping', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'origin, content-type')
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.json({ status: 'alive' })
})

module.exports = app
