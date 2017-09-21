//View Stripe balance

var stripe = require("stripe")(process.env.SECRET_KEY);

function Balance(req, res, next){
  stripe.balance.retrieve(function(err, balance){
    if(err){
      console.log(err)
      res.send("Something went wrong when finding account balance")
    } else {
      res.send(balance)
    }
  })
}

module.exports = Balance;
