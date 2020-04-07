var passport = require("passport");

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;


passport.serializeUser(function(user, done){
	done(null,user);

});

passport.deserializeUser(function(user,done){
	done(null,user);
});

passport.use(
 new GoogleStrategy(
  {
   clientID: "583849255533-di1uko1fcq304rqmg8jb7d7reulom5l2.apps.googleusercontent.com",
   clientSecret: "tzM28jcORtsj9VACFeIGOPoD",
   callbackURL: "http://localhost:9000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);



passport.use(new FacebookStrategy({
    clientID: "224907308586531",
    clientSecret: "a3b6e8512060d552b7e895f3d3e684cd",
    callbackURL: "http://localhost:9000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));