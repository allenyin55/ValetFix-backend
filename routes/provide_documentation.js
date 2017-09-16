const stripe = require('stripe')(process.env.SECRET_KEY);

function ProvideDocumentation(req, res, next){
  const { fileId, acctId } = req.body;

  stripe.accounts.update(
    acctId,
    // I assume that it's fileId that should be passed to
    // document, even though in the php version it's the variable $file
    {legal_entity: {verification: {document: fileId}}}
  )
  .then((account) => {
    res.json(account)
  })
  .catch((err) => {
    console.log(err)
    res.send(err.message)
  })
}

module.exports = ProvideDocumentation;