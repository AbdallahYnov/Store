const express = require('express');
const router = express.Router();
const controllers = require("../controller/controller.js");

router.get('/Accueil', controllers.getAccueil);

module.exports = router;