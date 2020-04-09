const mongoose = require('mongoose');
const Order = mongoose.model('Order');

module.exports.createOrder = async (req, res) => {
  try {
    const order = new Order();
    order.title = req.body.title;
    order.info = req.body.info;
    order.pet = req.body.pet;
    order.services = req.body.services;
    order.city = req.body.city;

    order.save((err, doc) => {
      if (!err) {
        res.send({ success: 'order successfully added' });
      } else {
        return handleError(err);
      }
    });
  } catch (e) {
    handleError(e);
  }
};

module.exports.getOrders = (req, res) => {
  Order.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        'Error in getting employees: ' + JSON.stringify(err, undefined, 2)
      );
    }
  });
};
