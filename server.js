//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;


app.get("/", function(req, res){
	app.use(express.static(__dirname + '/app/public'));
	res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});