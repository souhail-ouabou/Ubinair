const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.post('/activation', userCtrl.activateEmail)
router.post('/forgot', userCtrl.forgotPassword)
router.post('/reset', auth, userCtrl.resetPassword)
router.post('/refresh_token', userCtrl.getAccessToken)
router.get('/logout', userCtrl.logout)
// login as normal user -> dispatch login (firstlogin true)  -> refresh_token -> dispatchlogin firstlofin false -> grtUserInfo for the nav for ex
 router.get('/infor', auth, userCtrl.getUserInfor)

module.exports = router
