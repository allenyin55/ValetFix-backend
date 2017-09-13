// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.SECRET_KEY);

function Charge(req, res, next){
  stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    source: req.body.payToken,
  }, {
    stripe_account: req.body.acctId,
  }).then(function(charge) {
    // asynchronously called
    if(charge.paid === true){
      res.send(JSON.stringify(charge))
    }
  })
  .catch(function (err) {
    console.log(err)
    res.status(402).send("Somehting Wrong!")
  });
}

module.exports = Charge;