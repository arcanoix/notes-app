const express = require('express');
const router = express.Router();


router.get('/users/signin', (req, res) =>{
	res.render('users/login');
});

router.get('/users/signup', (req, res)=>{
	res.render('users/register');
});



module.exports = router;
