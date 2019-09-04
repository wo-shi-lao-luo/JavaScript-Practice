
const express = require('express');
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

var template = fs.readFileSync(__dirname + '/hello.ejs', 'utf-8');

app.get('/', function(req, res) {
	var data = ejs.render(template, {
		title: 'Hello, ejs',
		content: '<strong>Hello ejs</strong>'
	});
	res.end(data);
});

server.listen(3000, 'localhost');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});