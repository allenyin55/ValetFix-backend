// This is to add bank account

const stripe = require("stripe")(process.env.SECRET_KEY);

function AddBankAccount(req, res, next){
  stripe.customers.createSource(
    req.body.accountId,
    req.body.bankAccountId,
    function(err, confirmation) {
      // asynchronously called
      if(err){
        console.log(err)
        res.send("something went wrong when adding a bank account")
      }
      else{
        res.send(confirmation)
      }
    }
  );
}

module.exports = AddBankAccount;
