const express = require('express')
const router = require('express').Router()
const projetCtrl = require("../controllers/projetsCtrl");
const auth = require("../middleware/auth");
const isClient = require('../middleware/isClient')



router.post("/addprojet", auth, /*isClient*/ projetCtrl.addProjet);
 //login as a client -> refresh_token -> getallmyprojects
 router.get("/myprojects", auth, isClient, projetCtrl.getMyprojects);


module.exports = router