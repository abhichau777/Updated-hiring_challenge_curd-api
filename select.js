var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:3000/database";  
MongoClient.connect(url, function(err, db) {  
  if (err) throw err; 
  var dbase = db.db("database"); //here
  dbase.collection("book").find({}).toArray(function(err, result) {  
    if (err) throw err;  
    console.log(result);  
    db.close();  
  });  
}); 