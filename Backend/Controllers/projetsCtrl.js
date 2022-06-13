const Projets = require('../models/projetModel')
const User = require('../models/userModel')

const projetsCtrl = {
    addProjet: async (req, res) => {
        try {
            const {
                name,
                devis,
                plan,
                priceDebut,
                priceRequired,
                stateOfAdvance,
                description,
                subtype,
                type,
                //specification,
                features,
            } = req.body

            // console.log('--------------req booody-------------', req)
            const projet = new Projets({
                user: req.user.id,
                name: name,
                devis: devis,
                plan: plan,
                features: features,
                specification: [
                    { title: 'Design', progresState: 0, estimatedState: 0 },
                    {
                        title: 'Integration',
                        progresState: 0,
                        estimatedState: 0,
                    },
                    { title: 'Content', progresState: 0, estimatedState: 0 },
                ],
                priceDebut: priceDebut,
                priceRequired: priceRequired,
                stateOfAdvance: stateOfAdvance,
                description: description,
                subtype: subtype,
                type: type,
                clientBrief: {
                    visualInspiration: [],
                    briefFiles: [],
                },
                files: {
                    QuotesFiles: [],
                    InvoicesFiles: [],
                },
            })
            const user = await User.findById(req.user.id)
            if (user) {
                user.projets.push(projet)
            }
            await user.save()
            const addProjet = await projet.save()
            //res.status(400).json(addProjet,{ msg: "Projet has been add!" });
            console.log('addProjet', addProjet)
            res.json({ msg: 'addProjet Success!' })
        } catch (err) {
            console.log('-----------Add prjt error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    getMyprojects: async (req, res) => {
        try {
            const projects = await Projets.find({ user: req.user.id })
            res.json(projects)
        } catch (err) {
            console.log('-----------myprojets error-------------')

            console.log(err)
            return res.status(500).json({ msg: err.message })
        }
    },
    getProjectdetails: async (req, res) => {
        try {
            let sum = 0
            let projects = await Projets.findById(req.params.id).populate(
                'user',
                '-_id name  avatar'
            )
            //  const projecta = await Projets.find({},{"specification.estimatedState" :0})

            const sub = projects.specification.map((s) => s.progresState)
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i]
            }
            let total = Math.round(sum / sub.length)

            if (projects) {
                projects.totalProgresState = total
            }
            const updatedProjet = await projects.save()
            res.json(updatedProjet)
        } catch (error) {
            console.log('------------project details error----------')
            console.log(error)
            return res.status(500).json({ msg: error.message })
        }
    },
    updateProject: async (req, res) => {
        try {
            let sum = 0
            const { startDate, endDate } = req.body[0]

            // console.log('--------------req booody 1-------------', req.body)

            let specification = req.body.filter((v, k) => k !== 0)
            // console.log('---------specification ------', specification)

            const projet = await Projets.findById(req.params.id)
            const sub = projet.specification.map((s) => s.progresState)
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i]
            }
            let total = Math.round(sum / sub.length)

            if (projet) {
                projet.createdAt = startDate || projet.createdAt
                projet.finishedAt = endDate || projet.finishedAt
                projet.specification = specification || projet.specification
                projet.totalProgresState = total
                const updatedProject = await projet.save()
                console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    updateTasksClient: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const taskss = req.body.taskss

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.clientTaskss = taskss || projet.clientTaskss
                const updatedProject = await projet.save()
                console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    updateSpecProject: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newSpecification = req.body.specification
            // console.log('sended spec ', JSON.stringify(req.body))
            const projet = await Projets.findById(req.params.id)
            // console.log(
            //     'prj spec---------------',
            //     JSON.stringify(projet) + 'id= ' + req.params.id
            // )
            if (projet) {
                projet.specification = newSpecification || projet.specification
                // console.log('it enter')
                const updatedProject = await projet.save()
                console.log('updatedSpecProject----------', updatedProject)
                res.json({ msg: 'Update spec prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update spec prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllProjects: async (req, res) => {
        try {
            const projects = await Projets.find({}).populate(
                'user',
                '-_id name  avatar role'
            )
            res.json(projects)
        } catch (err) {
            console.log('-----------All Prj error-------------')

            console.log(err)
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteProject: async (req, res) => {
        const project = await Projets.findById(req.params.id)
        if (project) {
            await project.remove()
            res.json({ message: 'Project Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
    addBriefProject: async (req, res) => {
        try {
            const { info } = req.body
            // console.log('--------------req body -------------', req.body)
            const visualInspirationReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.clientBrief.visualInspiration =
                    projet.clientBrief.visualInspiration.concat(
                        visualInspirationReq
                    ) || projet.clientBrief.visualInspiration
                projet.clientBrief.websiteInspiration =
                    info.webinspiration || projet.clientBrief.websiteInspiration
                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    addBrandProject: async (req, res) => {
        try {
            const { info } = req.body
            console.log('--------------req body -------------', req.body)
            const briedFilesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            // // console.log(
            // //     '--------------req visualInspirationReq 1-------------',
            // //     visualInspirationReq
            // // )

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.clientBrief.briefFiles =
                    projet.clientBrief.briefFiles.concat(briedFilesReq) ||
                    projet.clientBrief.briefFiles
                projet.clientBrief.brandName =
                    info.brandName || projet.clientBrief.brandName
                projet.clientBrief.brandTageLine =
                    info.brandTageLine || projet.clientBrief.brandTageLine
                projet.clientBrief.ProductService =
                    info.ProductService || projet.clientBrief.ProductService
                projet.clientBrief.values =
                    info.values || projet.clientBrief.values
                projet.clientBrief.vision =
                    info.vision || projet.clientBrief.vision
                projet.clientBrief.mission =
                    info.mission || projet.clientBrief.mission
                projet.clientBrief.objectives =
                    info.objectives || projet.clientBrief.objectives
                projet.clientBrief.toneOfVoice =
                    info.toneOfVoice || projet.clientBrief.toneOfVoice
                projet.clientBrief.targetAudience =
                    info.targetAudience || projet.clientBrief.targetAudience
                projet.clientBrief.competitors =
                    info.competitors || projet.clientBrief.competitors
                projet.clientBrief.moreInfo =
                    info.moreInfo || projet.clientBrief.moreInfo

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteBriefFileProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newBriefFiles = project.clientBrief.briefFiles.filter(
                (fw) => fw.public_id !== public_id
            )
            project.clientBrief.briefFiles =
                newBriefFiles || projet.clientBrief.briefFiles

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
    deleteImgMBProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newvisualInspirations =
                project.clientBrief.visualInspiration.filter(
                    (fw) => fw.public_id !== public_id
                )
            project.clientBrief.visualInspiration =
                newvisualInspirations || projet.clientBrief.visualInspiration

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
    deleteQuotesProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newQuotesFiles = project.files.QuotesFiles.filter(
                (fw) => fw.public_id !== public_id
            )
            project.files.QuotesFiles =
                newQuotesFiles || project.files.QuotesFiles

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
    deleteInvoicesProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newInvoicesFiles = project.files.InvoicesFiles.filter(
                (fw) => fw.public_id !== public_id
            )
            project.files.InvoicesFiles =
                newInvoicesFiles || project.files.InvoicesFiles

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
    addQuotesProject: async (req, res) => {
        try {
            const briedFilesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.files.QuotesFiles =
                    projet.files.QuotesFiles.concat(briedFilesReq) ||
                    projet.files.QuotesFiles

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    addInvoicesProject: async (req, res) => {
        try {
            const briedFilesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.files.InvoicesFiles =
                    projet.files.InvoicesFiles.concat(briedFilesReq) ||
                    projet.files.InvoicesFiles

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = projetsCtrl
