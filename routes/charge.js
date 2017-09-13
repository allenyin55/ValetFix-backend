// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.SECRET_KEY);

function Charge(req, res, next){

  const { amount, payToken, acctId } = req.body;

  stripe.charges.create({
    amount: amount,
    currency: "usd",
    source: payToken,
  }, {
    stripe_account: acctId,
  }).then(function(charge) {
    // asynchronously called
    if(charge.paid === true){
      res.json(charge)
    }
  })
  .catch(function (err) {
    console.log(err)
    res.status(402).send("Somehting Wrong!")
  });
}

module.exports = Charge;