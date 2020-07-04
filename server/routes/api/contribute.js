const express = require("express");
const axios = require("axios");

const router = express.Router();
const Airtable = require('airtable');


//get
router.get('/', (req, res) => {
    const base = new Airtable({ apiKey: process.env.VUE_APP_AIRTABLE_API_KEY }).base(process.env.VUE_APP_AIRTABLE_BASE);
        // search the Distribute table by Name and State fields, case-insensitively.
    base('Distribute').select({
    view: "Grid view",
    filterByFormula: `OR(FIND(LOWER("${this.search}"), LOWER({Name})), FIND(LOWER("${this.search}"), LOWER({State})))`,
    }).eachPage(page.bind(this), done.bind(this));
    
    
    
    
    
    res.send('Hello WOrld');
});

module.exports = router;