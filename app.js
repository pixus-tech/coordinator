const express = require('express')
const { setup } = require('radiks-server')
const https = require('https')
const fs = require('fs')

const developmentConfig = {
  key: fs.readFileSync('./key.dev.pem'),
  cert: fs.readFileSync('./cert.dev.pem'),
  passphrase: 'foobar',
}
const productionConfig = {}
const config = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig

const app = express()
app.server = https.createServer(config, app)

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
