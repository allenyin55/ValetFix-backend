//Delete a customer

var stripe = require("stripe")(process.env.SECRET_KEY);

function Delete(req, res, next){
  stripe.customers.del(
    email: res.body.custId,
    function(err, customer){
      if(err){
        console.log(err)
        res.send("Something went wrong when creating a customer")
      } else {
        res.send(customer)
      }
    )
}

module.exports = Delete;
