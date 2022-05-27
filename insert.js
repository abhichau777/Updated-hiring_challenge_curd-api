var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/database";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbase = db.db("database"); //here
var myobj = {id:2,name:"Immortals of Meluha",author:"Amish Tripathi",rating:4,ratersNumber:3,raters:["ayush","shekhar","madhav"]};  
dbase.collection("book").insertOne(myobj, function(err, res) {  
if (err) throw err;  
console.log("1 record inserted");  
db.close();  
});  
});  