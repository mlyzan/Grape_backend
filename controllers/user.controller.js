const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');


const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
  const user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.updateInfo = {
    animals: null,
    address: null,
    years: null,
    photo: null
  };
  
  const password = req.body.password;

  let salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password,salt);

  user.save((err,user)=>{
    if(!err) {
      return res.status(200).send({userId: user._id, userName: user.fullName, userEmail: user.email, isSitter: user.isSitter});
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
      return res.status(200).send({userId: user._id, userName: user.fullName, userEmail: user.email, isSitter: user.isSitter, updateInfo: user.updateInfo})//{success: "Authorization successfully passed"});    
    }
    // unknown user or wrong password
    else {
      return res.status(404).json(info);
    }
  })(req, res);

} 

module.exports.getUser = async(req, res) => {
  try {
    const {id} = req.params;
    console.log(id, req.params, req.body);
    const user = await User.findById(id, {password: 0});
    if (!user) {
      return res.status(404).send('User not found');
    }
    return res.status(200).send({userId: user._id, userName: user.fullName, userEmail: user.email, isSitter: user.isSitter, updateInfo: user.updateInfo});
  } catch (error) {
    res.status(500).json(err);
  }
}

module.exports.updateProfile = async (req, res) => {
  let obj = {
    updateInfo: {
      animals: req.body.animals,
      address: req.body.address,
      years: req.body.years,
      photo: req.body.photo
    }
  }
  await User.updateOne({"_id": req.params.id}, {$set: obj}, (err, doc) => {
    if(!err) {
      res.send({"updateInfo": obj.updateInfo})
    } else {
      res.send({"error": err})
    }
  })
}