const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')



router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.post('/refresh_token', userCtrl.getAccessToken)
// login as normal user  -> refresh_token -> grtUserInfo
router.get('/infor', auth, userCtrl.getUserInfor)









module.exports = router