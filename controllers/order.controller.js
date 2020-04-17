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
    order.userId = req.body.userId;

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

module.exports.addOffer = (req, res) => {
  let newData = req.body.sitter;

  Order.updateOne(
    { _id: req.params.id },
    { $push: { offers: newData } },
    (err) => {
      if (!err) {
        res.send({ success: 'Successfully updated' });
      } else {
        console.log(
          'Error in Offer Update :' + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
};

module.exports.deleteOrderById = (req, res) => {
  Order.deleteOne({"_id": req.params.id}, (err) => {
    if (!err) { res.send({"success": 'Successfuly delete an order'}); }
    else { console.log('Error in Book Decline :' + JSON.stringify(err, undefined, 2)); }
  })  
};

module.exports.deleteElementFromOffers = async (req, res) => {

  try {
    await Order.bulkWrite(
      [
        { 
          "updateOne": {
            "filter": { "_id": req.params.id, offers: req.body.sitterId },
            "update" : {
              "$unset": { "offers.$": "" }
            } 
          }
        },
        { 
          "updateOne": {
              "filter": { "_id": req.params.id, offers: null },
              "update" : {
                "$pull": { "offers": null }
              }
          }
        }
      ]
    );
    return res.send({success: "Successfully removed"})
  } catch(e) {
    console.log(e);
  }
};
