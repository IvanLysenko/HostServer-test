var http = require('http')
var fs = require('fs')
var ecstatic = require('ecstatic')(__dirname + '/files')

var onRequest = function(request, response){
	ecstatic(request,response)

	fs.readFile('./HostPage.htm', function(err, data){
		if(err){
			response.writeHeader(404, {'Content-Type': 'text/html'})
			response.end('404')
			return
		}
		response.writeHeader(200, {'Content-Type': 'text/html'})
		response.write(data)
		response.end()
	})
}

http.createServer(onRequest).listen(8080)

