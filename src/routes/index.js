const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index'); // views/index.hbs
});

router.get('/about', (req, res) =>{
	res.render('about'); // views/about.hbs
});

module.exports = router;

