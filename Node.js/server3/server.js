const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const config = require('./config').config;

var template = fs.readFileSync(__dirname + '/hello.ejs', 'utf-8');
const server = http.createServer((req, res) => {
	var data = ejs.render(template, {
		title: 'Hello, ejs',
		content: '<strong>Hello ejs</strong>'
	});
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;
	res.end(data);
})

server.listen(config.port, config.hostname,() => {
	console.log(`Server running at http://${config.hostname}:${config.port}/`);
})