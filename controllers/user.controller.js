const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');


const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
  const user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  
  const password = req.body.password;

  let salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password,salt);

  user.save((err,doc)=>{
    if(!err) {
      res.send(doc);
    } else {
      console.log(err);
      if(err.code === 11000) {
        res.status(422).send(['Duplicate email address found']);
      } else {
        return next(err);
      }
    }
  });
}

module.exports.authenticate = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    //error from passport middleware
    if(err) {
      return res.status(400).json(err);
    } 
    // registered user
    else if (user) {
      return res.status(200).send({success: "Authorization successfully passed"});    
    }
    // unknown user or wrong password
    else {
      return res.status(404).json(info);
    }
  })(req, res);
} 
