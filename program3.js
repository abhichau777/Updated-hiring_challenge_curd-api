var express = require('express');
var app = express();
app.get('/rating/:username/:book/:rate', function(req, res){
	var new_rate=req.query.rate;
	var new_rater=req.query.username;
	var MongoClient = require('mongodb').MongoClient;  
	var url = "mongodb://localhost:27017/database";  
	MongoClient.connect(url, function(err, db) {  
		if (err) throw err; 
		var dbase = db.db("database"); //here  
		var newvalues = { $set: {rating: (rating*ratersNumber+rate)/(ratersNumber+1) },{ratersNumber:ratersNumber+1}  };
		var dbase = db.db("database");
		dbase.collection("book").update({}, newvalues, function(err, result) {
		if (err) throw err;
		if(result)
		{
			res.json({status:true});
		}
		else
		{
			res.json({status:false});
		}
		console.log("1 document updated");
		});
		db.close();
	}); 
});
app.listen(3000);