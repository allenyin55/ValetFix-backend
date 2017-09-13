// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.SECRET_KEY);

function ManagedAccount(req, res, next){
  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  var stripe = require("stripe")("sk_test_pMFPB34hhwkfIU8q3khgRDAH");
  
  stripe.accounts.create({
    country: "US",
    type: "custom"
  }).then(function(acct) {
    // asynchronously called
    res.send(acct)
  })
  .catch((err) => {
    console.log(err)
    res.status(402).send("Something wrong!")
  })
}

module.exports = ManagedAccount;