const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://User:petlyUser@users-v60cd.mongodb.net/petly?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
  if(!err) {
    console.log('MongoDB connection succeeded.');
  } else {
    console.log('Error in MongoDB connection.');
  }
});

require('./user.model');
require('./sitter.model');
require('./comment.model');