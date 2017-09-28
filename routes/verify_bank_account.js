const stripe = require("stripe")(process.env.SECRET_KEY);

function VerifyBankAccount(req, res, next){
  // use [32,45] for success verification and anything else for failure
  const data = {amounts: [32,5]}
  stripe.customers.verifySource(
    req.body.cusId,
    req.body.defaultSource,
    data,
    function(err, bankAccount) {
      if (err){
        console.log(err)
        res.send(err)
      }
      else{
        console.log(bankAccount.status)
        res.send(bankAccount)
      }
  });

}

module.exports = VerifyBankAccount