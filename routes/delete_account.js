// This is to delete an user account

const stripe = require("stripe")(process.env.SECRET_KEY);

function DeleteAccount(req, res, next){
  stripe.accounts.del(req.body.acctId)
  .then((deletedParams) => {
    if (deletedParams){
      res.send(deletedParams)
    }
    else{
      res.send("Account not deleted")
    }
  })
  .catch((err)=>{
    console.log(err)
    res.send("Something went wrong while deleting the account!" +
             "Most likely the account doesn't exist")
  })
}

module.exports = DeleteAccount;