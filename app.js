const express = require('express')
const { setup } = require('radiks-server')
const fs = require('fs')

const app = express()

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
