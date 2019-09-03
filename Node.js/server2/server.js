const http = require('http');
const fs = require('fs');
const config = require('./config').config;

const server = http.createServer((req, res) => {
	fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) {
		if (err) {
			res.setHeader('Content-Type', 'text/plain');
			res.statusCode = 404;
			res.end ('Not Found');
		}
		else {
			res.setHeader('Content-Type', 'text/html');
			res.statusCode = 200;
			res.end (data);			
		}
	})
})

server.listen(config.port, config.hostname,() => {
	console.log(`Server running at http://${config.hostname}:${config.port}/`);
})