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
  },
  whoBookedId: {
    type: String
  },
  sitterName: {
    type: String
  }
});

mongoose.model('Book', bookSchema);