const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  contactInfo: {
    type: String
  },
  name: {
    type: String
  },
  userId: {
    type: String
  },
  isBooked: {
    type: Boolean
  },
  isComplete: {
    type: Boolean
  }
});

mongoose.model('Book', bookSchema);