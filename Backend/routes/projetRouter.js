const router = require('express').Router()
const projetCtrl = require('../controllers/projetsCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const isClient = require('../middleware/isClient')

router.post('/addprojet', auth, /*isClient*/ projetCtrl.addProjet)
//login as a client -> refresh_token -> getallmyprojects
router.get('/myprojects', auth, projetCtrl.getMyprojects)
//login as a client -> refresh_token -> getProjectdetails
router.get('/details/:id', auth, projetCtrl.getProjectdetails)
router.put('/updateproject/:id', projetCtrl.updateProject)
router.put('/updatetasks/:id', projetCtrl.updateTasksClient)
router.put('/updatespecprj/:id', projetCtrl.updateSpecProject)
router.put('/updateprjcolors/:id', projetCtrl.updateColorsProject)
router.put('/updateprjfonts/:id', projetCtrl.updateFontsProject)
router.put('/updateprjcontents/:id', projetCtrl.updateContentProject)

// router.put('/updatetasksprj/:id', projetCtrl.updateTasksProject)

//login as an admin -> refresh_token -> getallprojects
router.get('/allprojects', auth, authAdmin, projetCtrl.getAllProjects)
router.delete('/deleteproject/:id', auth, authAdmin,   projetCtrl.deleteProject)
router.post('/addbrief/:id', auth,    projetCtrl.addBriefProject)
router.post('/addaboutbrand/:id', auth, projetCtrl.addBrandProject)
router.post('/deletebrieffile/:id', auth, projetCtrl.deleteBriefFileProject)
router.post('/deleteimgmoodb/:id', auth, projetCtrl.deleteImgMBProject)
router.post('/deletequotes/:id', auth, projetCtrl.deleteQuotesProject)
router.post('/addquotes/:id', auth, projetCtrl.addQuotesProject)
router.post('/addinvoices/:id', auth, projetCtrl.addInvoicesProject)
router.post('/deleteinvoices/:id', auth, projetCtrl.deleteInvoicesProject)
router.post('/addmedia/:id', auth, projetCtrl.addMediaProject)
router.post('/deletemedia/:id', auth, projetCtrl.deleteMediaProject)
module.exports = router
