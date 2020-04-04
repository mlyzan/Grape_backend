const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');

module.exports.addComment = (req, res, next) => {
  const comment = new Comment();
  comment.comment = req.body.comment;
  comment.userId = req.body.userId;
  comment.name = req.body.name;

  comment.save((err, doc)=>{
    if(!err) {
      res.send({success: 'Comment successfully added'});
    } 
    else {
      return handleError(err);
    }
  });
}

module.exports.getComments = (req, res) => {
  Comment.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log('Error in getting employees: ' + JSON.stringify(err, undefined, 2));
    }
  })
}