const express = require("express");
const axios = require("axios");

const router = express.Router();
const Airtable = require('airtable');


//get
router.get('/', (req, res) => {
    //const base = new Airtable({ apiKey: process.env.VUE_APP_AIRTABLE_API_KEY }).base(process.env.VUE_APP_AIRTABLE_BASE);
    
    var queryResults = [];

        // search the Distribute table by Name and State fields, case-insensitively.
        base('Distribute').select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 100,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
        
            records.forEach(function(record) {
                //console.log('Retrieved', record.get('Name'));
                queryResults.push(record.fields);
 
            });
        
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
   
            res.contentType('json');
            res.send(queryResults);
        }, function done(err) {
            if (err) { console.error(err); return; }

        });
    
       

    
});

module.exports = router;