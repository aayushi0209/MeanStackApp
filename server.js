//server.js

//modules=========================================
var express=require('express');
var expobj=express();
var bodyParser=require('body-parser');
var methodOverride=require('method-override')
var mongoose=require('mongoose')

//configuration
//backend configuration files
	var db=require('./backendconfiguration/db');
//set our port
	var port =process.env.PORT||8080;
//parse application/jason
	expobj.use(bodyParser.json());
//parse application/vnd.api+jason as jason
	expobj.use(bodyParser.json({type:'application/vnd.api+jason'}));
//parse application /x-www-form-urlencoded
	expobj.use(bodyParser.urlencoded({extended:true}));
//ovveride with the X-HTTP-Method-Override header in the request
	expobj.use(methodOverride('X-HTTP-Method-Override'));
//set the static files location /public/img
	expobj.use(express.static(__dirname+'/public'));

//routes====================================================
	require('./backendapp/routes')(expobj); //configure our routes

//startappp==================================================
	expobj.listen(port);
//shoutout to the user
	console.log('\nNode server has been started');
	console.log('\n To check it open any web browser and type "localhost"'+port+'and see the magic');
//expose app
	exports=module.exports =expobj;

	//create data&& fetch data

	
//connect to our mongoDB database
	mongoose.connect(db.url);

//on connection
	mongoose.connection.on('connection',function(){
		console.log('connected to database mongoDB @ 27017');
	});

	mongoose.connection.on('err',function(err){
		if (err) {
			console.log('Error in Database Connection :'+err);
		}
	});
	mongoose.connection.on('disconnected',function(){
		console.log('disconnected from databse mongodb');
	});
	process.on('SIGINT',function(){
		console.log('disconnected form Database mongoDB through app termination');
		process.exit(0);
	});

	