var express = require('express');
var app = express();
app.get('/book/:title', function(req, res){
	var str=req.query.name;
	
	console.log("hello");
	var MongoClient = require('mongodb').MongoClient;  
	var url = "mongodb://localhost:27017/database";  
	MongoClient.connect(url, function(err, db) {  
		if (err) throw err; 
		var dbase = db.db("database"); //here
		var query = { name: str }; 
		dbase.collection("book").find(query).toArray(function(err, result) {  
		if (err) throw err;  
	
		console.log(result);  
		if(resp){
			res.json({status:true,details:resp});
		}
		else
		{
			res.json({status:false,details:resp});
		}
		db.close();  
		});  
	}); 
});
app.listen(27017);