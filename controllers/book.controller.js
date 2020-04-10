const mongoose = require('mongoose');


const Book = mongoose.model('Book');

module.exports.addBook = (req, res, next) => {
  const book = new Book();
  book.contactInfo = req.body.contactInfo;
  book.userId = req.body.userId;
  book.name = req.body.name;
  book.isBooked = req.body.isBooked;
  book.isComplete = req.body.isComplete;

  book.save((err, doc)=>{
    if(!err) {
      res.send({success: 'Book request successfully sended. Wait, while sitter will contact you.'});
    } 
    else {
      return handleError(err);
    }
  });
}

module.exports.getBooks = (req, res) => {
  Book.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log('Error in getting books: ' + JSON.stringify(err, undefined, 2));
    }
  })
}

module.exports.updateBookStatus = (req, res) => {
  
  Book.updateOne({"_id": req.params.id}, {
    $set: {
      isBooked: req.body.isBooked,
      isComplete: req.body.isComplete }
    }, 
    err => {
    if (!err) { res.send({"success": 'Status successfully updated'}); }
    else { console.log('Error in Status Update :' + JSON.stringify(err, undefined, 2)); }
  })
}

module.exports.declineBookById = (req, res) => {
  Book.deleteOne({"_id": req.params.id}, (err) => {
    if (!err) { res.send({"success": 'Successfuly decline a request'}); }
    else { console.log('Error in Book Decline :' + JSON.stringify(err, undefined, 2)); }
  })  

}
