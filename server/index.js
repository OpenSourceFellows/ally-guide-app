const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require('dotenv').config()
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const amplify = require('./routes/api/amplify');
const give = require('./routes/api/give');
const library = require('./routes/api/library');
const email = require('./routes/api/email')

app.use('/api/amplify', amplify);
app.use('/api/give', give);
app.use('/api/library', library);
app.use('/api/email', email);

//handle production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + '/public'));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

module.exports = app 
