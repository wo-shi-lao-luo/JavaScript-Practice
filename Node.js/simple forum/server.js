const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring');
const config = require('./config').config;

var template = fs.readFileSync(__dirname + '/forum.ejs', 'utf-8');
var posts = [];

const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		req.data = "";
		req.on("readable", function () {
			var char = req.read();
			if (char) {
				req.data += char;
			}
		});
		req.on("end", function(){
			var query = qs.parse(req.data);
			posts.push(query.content);
			showForm(posts, res);
		})
	}
	else {
		showForm(posts, res);
	}
})

server.listen(config.port, config.hostname,() => {
	console.log(`Server running at http://${config.hostname}:${config.port}/`);
})

function showForm(p_post, res) {
	var data = ejs.render(template, {
		title: "Hello, ejs",
		posts: p_post
	});
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;
	res.end(data);	
}