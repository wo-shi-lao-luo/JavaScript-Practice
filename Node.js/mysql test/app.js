const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: ""
});

app.get('/', function (req, res) {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Database connected!");
		var sql = "INSERT INTO users (username, email, password) VALUES ?";
		var username = 'req.body.username';
		var email = 'req.body.email';
		var password = 'req.body.password';
		var values = [[username, email, password]];
		con.query(sql, [values], function (err, result) {
		    if (err) throw err;
		    console.log("Number of records inserted: " + result.affectedRows);
	  	})
	});
})

server.listen(3000, 'localhost');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});