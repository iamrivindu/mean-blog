const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{
	if(err){
		console.log('Could not connect to databse');
	}else{
		console.log('Connected successfully to database');
	}

});
app.use(express.static(__dirname + '/clientblog/dist'));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/clientblog/dist/index.html'));
});



app.listen(8080,()=>{
	console.log('Listening to port 8080');
});
