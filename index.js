var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up the public folder
var serve = serveStatic('public')

// Create server
var server = http.createServer(function onRequest (req, res) {
  console.log(req.method, req.url)
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000, () => {
  console.log('listening on port 3000')
})
