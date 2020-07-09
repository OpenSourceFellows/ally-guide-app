const express = require("express");
const router = express.Router();
const Airtable = require('airtable');
require('dotenv').config();

//get
router.get('/', (req, res) => {
    //const base = new Airtable({ apiKey: process.env.VUE_APP_AIRTABLE_API_KEY }).base(process.env.VUE_APP_AIRTABLE_BASE);
    const base = new Airtable({apiKey: process.env.AirTable}).base('appamjI9CHzLJhPrO');
    var queryResults = [];

    // search the Distribute table by Name and State fields, case-insensitively.
    base('Education: Library').select({
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
    }, function done(err) {
        if (err) { console.error(err); return; }
        res.contentType('json');
        res.send(queryResults);
    });
});

module.exports = router;
