const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: {
    type: String
  },
  name: {
    type: String
  },
  userId: {
    type: String
  }
});

mongoose.model('Comment', commentSchema);