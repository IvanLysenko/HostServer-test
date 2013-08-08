var http = require('http')
var ecstatic = require('ecstatic')


http.createServer(
	ecstatic({root: __dirname + '/files'})
).listen(8888)

//does not work in any way like a server.
