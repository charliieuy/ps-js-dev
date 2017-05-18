/*************************************************************
	* Cloud 9 URL
	* http://ps-js-dev-charliieuy.c9users.io:8080
	* Ports: 8080,8081,8082
*************************************************************/

//Common JS 
//var express = require('express');
//var path =  require('path');
//var open = require('open');
//var port = 8080;
//var app = express();

//ECS6 
import express from 'express';
import path from 'path';
import open from 'open';
const port = 8080;
const app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else{
		open('http://localhost:' + port);
	}
});
