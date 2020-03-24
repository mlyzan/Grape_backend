const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'Full name can\'t be empty'
  },
  email: { 
    type: String,
    required: 'Email can\'t be empty',
    unique: true
  },
  password: {
    type: String,
    required: 'Password can\'t be empty',
    minlength: [4, 'Password must be at least 4 characters long']
  }
});

userSchema.path('email').validate(val => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail');

mongoose.model('User', userSchema); 