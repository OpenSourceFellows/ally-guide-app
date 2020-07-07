const express = require("express");
const axios = require("axios");

const router = express.Router();
const Airtable = require('airtable');

//get
router.get('/', (req, res) => {
    //const base = new Airtable({ apiKey: process.env.VUE_APP_AIRTABLE_API_KEY }).base(process.env.VUE_APP_AIRTABLE_BASE);
    const base = new Airtable({apiKey: 'keyTxKaaoAHbAKJ3a'}).base('appamjI9CHzLJhPrO');
    var queryResults = [];

        // search the Distribute table by Name and State fields, case-insensitively.
        base('Distribute').select({
            // Selecting the first 3 records in Grid view:
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.           
            records.forEach(function(record) {
                queryResults.push(record.fields);
            });
            
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
   
            console.log('finished');
            console.log(queryResults.length);   
        }, function done(err) {
            if (err) { console.error(err); return; }
            res.send(queryResults);
        });       
});

function CheckForDup(record){
    
}

module.exports = router;