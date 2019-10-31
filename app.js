const express = require('express')
const Sentry = require('@sentry/node')
const { setup } = require('radiks-server')
const fs = require('fs')
const isProduction = process.env.NODE_ENV

const app = express()

if (isProduction) {
  Sentry.init({ dsn: process.env.SENTRY_DSN })
  app.use(Sentry.Handlers.requestHandler())
}

setup().then(RadiksController => {
  app.use('/radiks', RadiksController)
})

app.get('/ping', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'origin, content-type')
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.json({ status: 'alive' })
})

if (isProduction) {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://app.pixus.tech')
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PATCH, POST')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Max-Age', '1728000')
    next()
  })

  app.use(Sentry.Handlers.errorHandler())
}

module.exports = app
