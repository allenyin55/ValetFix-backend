const fs = require('fs');

function FileUpload(req, res, next){

  const {secretKey, acctId, file} = req.body

  const stripe = require('stripe')(secretKey);

  stripe.fileUploads.create(
    {
      purpose: 'identity_document',
      file: {
        data: fs.readFileSync(file),
        // Not Sure what the name should be
        name: 'file_name.jpg',
        type: 'application/octet-stream'
      }
    },
    {stripe_account: acctId}
  )
}