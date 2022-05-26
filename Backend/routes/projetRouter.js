const router = require('express').Router()
const projetCtrl = require('../controllers/projetsCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const isClient = require('../middleware/isClient')

router.post('/addprojet', auth, /*isClient*/ projetCtrl.addProjet)
//login as a client -> refresh_token -> getallmyprojects
router.get('/myprojects', auth, isClient, projetCtrl.getMyprojects)
//login as a client -> refresh_token -> getProjectdetails
router.get('/details/:id', auth,  projetCtrl.getProjectdetails)
router.put('/updateproject/:id', projetCtrl.updateProject)
router.put('/updatetasks/:id', projetCtrl.updateTasksClient)
//login as an admin -> refresh_token -> getallprojects
router.get("/allprojects", auth, authAdmin, projetCtrl.getAllProjects);
module.exports = router
