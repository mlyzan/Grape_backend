const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
  if(!err) {
    console.log('MongoDB connection succeeded.');
  } else {
    console.log('Error in MongoDB connection.');
  }
});

require('./user.model');
require('./sitter.model');
require('./comment.model');