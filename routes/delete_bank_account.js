// This is to delete bank account

const stripe = require("stripe")(process.env.SECRET_KEY);

function DeleteBankAccount(req, res, next){
  stripe.customers.deleteSource(
    req.body.accountId,
    req.body.bankAccountId,
    function(err, confirmation) {
      // asynchronously called
      if(err){
        console.log(err)
        res.send("something went wrong when deleting a bank account")
      }
      else{
        res.send(confirmation)
      }
    }
  );
}

module.exports = DeleteBankAccount;