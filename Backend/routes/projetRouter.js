const express = require('express')
const router = require('express').Router()
const projetCtrl = require("../controllers/projetsCtrl");
const auth = require("../middleware/auth");

router.post("/addprojet", auth, /*isClient*/ projetCtrl.addProjet);



module.exports = router