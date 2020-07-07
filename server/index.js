const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const elevate = require('./routes/api/elevate');
const contribute = require('./routes/api/contribute');

app.use('/api/elevate', elevate);
app.use('/api/contribute', contribute);

//handle production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + '/public'));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
