//This adds a card to an account

const stripe = require("stripe")(process.env.SECRET_KEY);

function AddBankCard(req, res, next){
  stripe.customers.createSource(
    req.body.accountId,
    req.body.cardId,
    function(err, confirmation){
      if(err) {
        console.log(err)
        res.send("Something went wrong adding the card")
      } else {
        res.send(confirmation)
      }
    }
  );
}

module.exports = AddBankCard;
