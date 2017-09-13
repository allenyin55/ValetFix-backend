// Waiting to be tested
// Only live keys can test this method

const stripe = require("stripe")(process.env.SECRET_KEY);

function Update(req, res, next){

  const { email, acctId, day, month, year, first, last } = req.body;
  
  // legal_entity_address and last 4 ssn
  const { street, city, postalCode, state } = req.body

  // legal_entity_ssn
  const { ssn, ssn4 } = req.body;

  stripe.accounts.update(acctId, {
    email: email,
    legal_entity: {
      dob:{
        day: day,
        month: month,
        year: year,
      },
      first_name: first,
      last_name: last,
      address:{
        city: city,
        line1: street,
        state: state,
        postal_code: postalCode,
      },
      ssn_last_4: ssn4,
      personal_id_number: ssn,
      type: "individual",
    },
    tos_acceptance: {
      date: Math.round((new Date()).getTime() / 1000),
      ip: req.connection.remoteAddress
    }
  })
  
  stripe.accounts.retrieve(acctId,
    function(err, account) {
      // asynchronously called
      if (account.email != false){
        res.json(account)
      }
    }
  );
}

module.exports = Update;