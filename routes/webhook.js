// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")(process.env.SECRET_KEY);


function Webhook(req, res, next) {
  // Retrieve the request's body and parse it as JSON
  const event_json = JSON.parse(req.body);

  // Do something with event_json
  console.log(event_json)

  res.send(200);
};

module.exports = Webhook;