const express = require('express')
const router = require('express').Router()
const {getTests,setTest} = require('../Controllers/userCtrl')

router.route('/').get(getTests).post(setTest)



module.exports = router