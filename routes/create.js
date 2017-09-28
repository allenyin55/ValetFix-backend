//Create a customer

var stripe = require("stripe")(process.env.SECRET_KEY);

function Create(req, res, next){
  stripe.customers.create({
    email: req.body.email,
    source: req.body.stripeToken
  },
  function(err, customer){
    if(err){
      console.log(err)
      res.send("Something went wrong when creating a customer")
    } else {
      res.send(customer)
    }
  })
}

module.exports = Create;
