const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  info: {
    type: String,
  },
  pet: {
    type: String,
  },
  services: {
    type: Array,
  },
  city: {
    type: String,
  },
  userId: {
    type: String,
  },
});

mongoose.model('Order', orderSchema);
