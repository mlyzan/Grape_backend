const mongoose = require('mongoose'); 

mongoose.connect("mongodb://localhost:27017/GRAPE_DB", {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
  if(!err) {
    console.log('MongoDB connection succeeded.');
  } else {
    console.log('Error in MongoDB connection.');
  }
});

require('./user.model');
require('./sitter.model');