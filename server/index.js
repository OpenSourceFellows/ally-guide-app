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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));