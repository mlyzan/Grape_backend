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
  offers: {
    type: Array,
  },
});

mongoose.model('Order', orderSchema);
