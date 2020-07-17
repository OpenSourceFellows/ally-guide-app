const router = require('express').Router();

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req,res) => {
    res.send('loggin out')
});

//auth with google
router.get('/google', (req, res) => {
    //passport handles
    
})

module.exports = router;