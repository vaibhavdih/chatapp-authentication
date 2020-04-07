var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

router.get("/auth/google/callback",passport.authenticate("google",{failureRedirect:"/",session:false}),function(req,res){
	var token = req.user.token;
	res.redirect("http://localhost:3000/dashboard?token="+token);
});

router.get('/auth/facebook',passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/dashboard');
  });


module.exports = router;
