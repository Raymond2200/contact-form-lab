var express = require('express');
var router = express.Router();

let contactCtrl = require("../controller/contact");

router.get('/', contactCtrl.indexContact);

router.post('/', contactCtrl.createContact);

module.exports = router;