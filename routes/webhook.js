// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")(process.env.SECRET_KEY);
const nodemailer = require('nodemailer')


function Webhook(req, res, next) {
  
  const event_json = req.body
  const accId = event_json.data.object.id
  const verification = event_json.data.object.legal_entity.verification

  // Do something with event_json
  console.log("Webhook received")

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport('smtps://valayemail@gmail.com:7Lu<E3`vF~{7-{f8@smtp.gmail.com');

  // setup e-mail data with unicode symbols
  let mailOptions = {
      from: '"Valay Email" <valayemail@gmail.com>', // sender address
      to: 'demobi@gmatch.org', // list of receivers
      subject: accId + ", " + verification.status,   // Subject line
      text: verification.details, // plaintext body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  })
  
  res.sendStatus(200);
}

module.exports = Webhook