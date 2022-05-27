var express = require('express');
var app = express();
app.get('/ratingStatus/:username/:book', function(req, res){
	var str=req.query.rater;
	var MongoClient = require('mongodb').MongoClient;  
	var url = "mongodb://localhost:27017/database";  
	MongoClient.connect(url, function(err, db) {  
		if (err) throw err; 
		var dbase = db.db("database"); //here 
		dbase.collection("book").find({"raters.rater":str}).toArray(function(err, result) {  
		if (err) throw err;  
		console.log(result);
		if(result)
		{
			res.json({status:true,rating:result.rating,booklist:book});
		}
		else{
			res.json({status:false,rating:result.rating,booklist:book});
		}
		});
	db.close();
	}); 
});
app.listen(3000);