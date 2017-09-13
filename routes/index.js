const express = require('express');
const router = express.Router();
const Charge = require("./charge.js")
const ManagedAccount = require('./managed_account.js')

router.post("/charge", Charge);
router.post("/managedaccount", ManagedAccount);

module.exports = router;