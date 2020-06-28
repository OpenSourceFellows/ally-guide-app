const express = require("express");

const router = express.Router();

// Get Post
router.get('/', (req, res) => {
    res.send('hello');
});

module.exports = router;