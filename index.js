const app = require('./app')
const PORT = process.env.PORT || 1260

app.server.listen(PORT, '0.0.0.0')
