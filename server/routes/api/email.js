const express = require("express");
const router = express.Router();
const Airtable = require('airtable');
require('dotenv').config();

//Endpoints

//get 
router.get('/', (req, res) => {
    res.send("hello world");

});

module.exports = router;
