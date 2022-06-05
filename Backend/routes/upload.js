const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')
const auth = require('../middleware/auth')

// login as normal user   -> refresh_token -> uploadAvatar
 router.post('/upload_moodboard',  auth, uploadCtrl.uploadMoodboard)

module.exports = router
