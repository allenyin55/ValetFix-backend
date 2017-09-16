// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")(process.env.SECRET_KEY);

function ManagedAccount(req, res, next){
  stripe.accounts.create({
    country: "US",
    type: "custom"
  }).then(function(acct) {
    // asynchronously called
    res.json(acct)
  })
  .catch((err) => {
    console.log(err)
    res.status(402).send("Something wrong while creating new account!")
  })
}

module.exports = ManagedAccount;