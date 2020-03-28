const mongoose = require('mongoose');

const sitterSchema = new mongoose.Schema({
  services: {
    type: Array,
    required: 'Services can\'t be empty'
  },
  animals: {
    type: Array,
    required: 'Animals can\'t be empty'
  },
  availability: {
    type: String,
    required: 'Availability can\'t be empty'
  },
  payment: {
    type: Number,
    required: 'Payment can\'t be empty'
  },
  address: {
    type: String,
    required: 'Address can\'t be empty'
  },
  years: {
    type: String,
    required: 'Years can\'t be empty'
  },
  information: {
    type: String,
    required: 'Info can\'t be empty'
  },
  photo: {
    type: String,
    required: 'Photo can\'t be empty'
  }
});

mongoose.model('Sitter', sitterSchema);