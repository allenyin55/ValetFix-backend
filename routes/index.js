const express = require('express');
const router = express.Router();
const Charge = require("./charge.js")
const ManagedAccount = require('./managed_account.js')
const UpdateAccount = require("./update_managed_account.js")

router.post("/charge", Charge);
router.post("/managedaccount", ManagedAccount);
router.post("/updateaccount", UpdateAccount);

module.exports = router;