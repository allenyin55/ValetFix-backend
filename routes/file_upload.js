const fs = require('fs');
const stripe = require('stripe')(process.env.SECRET_KEY);

function FileUpload(req, res, next){
  const {acctId, file} = req.body

  stripe.fileUploads.create(
    {
      purpose: 'identity_document',
      file: {
        data: fs.readFileSync(__dirname+'/1.jpg'),
        // Not Sure what the name should be
        name: 'file.jpg',
        type: 'application/octet-stream'
      }
    }, function(err, fileUpload) {
      // asynchronously called
      if (err){
        console.log(err)
        res.send("Something went wrong while uploading the file")
      }
      else{
        res.send(fileUpload)
      }
    });
}

module.exports = FileUpload;