require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
let PORT = process.env.PORT || 3000;

const rtsIndex = require('./routes/index.router');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

//error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
      var valErrors = [];
      Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
      res.status(422).send(valErrors)
  }
});
app.get('/', (req, res) => res.send('Server works!'));
 
//start server
app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`);
});
