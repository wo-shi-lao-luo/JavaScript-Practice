const http = require('http');
const config = require('./config').config;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	switch (req.url) {
		case '/':
			res.end('Hello, world');
			break;
		case '/about':
			res.end('About page');
			break;
		case '/home':
			res.end('Home page');
			break;
		default:
			res.end('Not Found!');
	}
})

server.listen(config.port, config.hostname,() => {
	console.log(`Server running at http://${config.hostname}:${config.port}/`);
})