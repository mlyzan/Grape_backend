const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const Sitter = mongoose.model('Sitter');

module.exports.createSitter = (req, res, next) => {
  const sitter = new Sitter();
  sitter.services = req.body.services;
  sitter.animals = req.body.animals;
  sitter.availability = req.body.availability;
  sitter.payment = req.body.payment;
  sitter.address = req.body.address;
  sitter.years = req.body.years;
  sitter.information = req.body.information;
  sitter.photo = req.body.photo;
  sitter.userId = req.body.userId;
  sitter.userName = req.body.userName;
  sitter.userEmail = req.body.userEmail;
  

  sitter.save((err, doc)=>{
    if(!err) {
      res.send(doc);
    } 
    else {
      return handleError(err);
    }
  });
}

module.exports.getSitters = (req, res) => {
  Sitter.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log('Error in getting employees: ' + JSON.stringify(err, undefined, 2));
    }
  })
}

module.exports.getSitterById = (id, res) => {
  Sitter.findOne({"_id": new ObjectId(id)},(err, doc) => {
    if(!err) {
      res.send(doc);
    } else {
      console.log('Error in getting employees: ' + JSON.stringify(err, undefined, 2));
    }
  })
}

module.exports.deleteSitterById = (req, res) => {
  Sitter.deleteOne({"userId": req.params.id}, (err) => {
    if (!err) { res.send({"success": 'Successfuly deleted'}); }
    else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
  })  
 
}

module.exports.updateSitterById = (req, res) => {
  let newData = {
    services:  req.body.services,
    animals: req.body.animals,
    availability: req.body.availability,
    payment: req.body.payment,
    address: req.body.address,
    years: req.body.years,
    information: req.body.information
  };

  Sitter.updateOne({"userId": req.params.id}, {$set: newData}, err => {
    if (!err) { res.send({"success": 'Successfully updated'}); }
    else { console.log('Error in Sitter Update :' + JSON.stringify(err, undefined, 2)); }
  })
}