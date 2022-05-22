const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

<<<<<<< HEAD
=======


>>>>>>> ea322b72ced07a2f80eea84e5b9e0e0a14fb84e0
router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.post('/activation', userCtrl.activateEmail)
router.post('/forgot', userCtrl.forgotPassword)
router.post('/reset', auth, userCtrl.resetPassword)
<<<<<<< HEAD
router.post('/refresh_token', userCtrl.getAccessToken)
router.get('/logout', userCtrl.logout)
// login as normal user -> dispatch login (firstlogin true)  -> refresh_token -> dispatchlogin firstlofin false -> grtUserInfo for the nav for ex
 router.get('/infor', auth, userCtrl.getUserInfor)

module.exports = router
=======
// router.post('/refresh_token', userCtrl.getAccessToken)
// login as normal user  -> refresh_token -> grtUserInfo
// router.get('/infor', auth, userCtrl.getUserInfor)









module.exports = router
>>>>>>> ea322b72ced07a2f80eea84e5b9e0e0a14fb84e0
