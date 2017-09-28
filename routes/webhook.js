// Work in progress
// Not getting webhook notifications of customer.source.updated
const stripe = require("stripe")(process.env.SECRET_KEY);
const nodemailer = require('nodemailer')


function Webhook(req, res, next) {
  
  console.log("from webhook: ", req.body)
  const event_json = req.body.data.object
  const accId = event_json.id
  const verification = (event_json.legal_entity) ? event_json.legal_entity.verification : event_json.status
  const owner = (event_json.owner) ? event_json.owner : null

  const subject = (event_json.legal_entity) ? accId + ", " + verification.status : "Bank account verification is " + verification
  const text = (event_json.legal_entity) ? verification.details : owner.name + "(" + owner.email + ")'s bank account is  " + verification

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport('smtps://valayemail@gmail.com:7Lu<E3`vF~{7-{f8@smtp.gmail.com');

  // setup e-mail data with unicode symbols
  let mailOptions = {
      from: '"Valay Email" <valayemail@gmail.com>', // sender address
      to: 'mopoditilu@geekforex.com', // list of receivers
      subject: subject,   // Subject line
      text: text, // plaintext body
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