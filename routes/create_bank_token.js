

const stripe = require("stripe")(process.env.SECRET_KEY);

function CreateBankToken(req, res, next){

  stripe.tokens.create({
    bank_account: {
      country: 'US',
      currency: 'usd',
      account_holder_name: req.body.holderName,
      account_holder_type: req.body.holderType,
      routing_number: req.body.routingNumber,
      account_number: req.body.accountNumber
    }
  }, function(err, token){
    if(err) {
      console.log(err)
      res.send("Something went wrong when creating a token")
    } else {
      res.send(token)
    }
  })
}

module.exports = CreateBankToken;
