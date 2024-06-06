const express = require('express');
const router = express.Router();
const controllers = require("../controller/controller.js");

router.get('/index', controllers.getAccueil);

module.exports = router;