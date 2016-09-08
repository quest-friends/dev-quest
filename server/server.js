var app = require('./app')

var PORT = normalizePort(process.env.PORT || '4000')

app.listen(PORT, function() {
  console.log('server is running on port', PORT)
})
