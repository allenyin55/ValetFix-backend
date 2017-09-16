const express = require('express');
const router = express.Router();
const Charge = require("./charge")
const ManagedAccount = require('./managed_account')
const UpdateAccount = require("./update_managed_account")
const FileUpload = require("./file_upload")
const ProvideDocumentation = require("./provide_documentation")
const DeleteAccount = require("./delete_account")
const DeleteBankAccount = require("./delete_bank_account")
const Webhook = require("./webhook")

router.post("/charge", Charge);
router.post("/managed-account", ManagedAccount);
router.post("/update-managed-account", UpdateAccount);
router.post("/file-upload", FileUpload);
router.post("/provide-documentation", ProvideDocumentation);
router.post("/delete-account", DeleteAccount);
router.post('/delete-bank-account', DeleteBankAccount);
router.post('/webhook', Webhook);

module.exports = router;