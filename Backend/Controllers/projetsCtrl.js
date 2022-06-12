const Projets = require('../models/projetModel')
const User = require('../models/userModel')
const uuid = require('uuid');

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

           

            // for(let i=0;i<initProjectColors.length;i++){
            //     for(let j=0;j<initProjectColors[i].hexs.length;j++){
            //         initProjectColors[i].hexs[j]=uuid.v1()
            //     }
            // }

            console.log('--------------req booody-------------', req)
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
                projectColors:[

                {title:"Base (60%) - ex. backgrounds",hexs:[{id:uuid.v1(),hexCode:'#000'},
                                                            {id:uuid.v1(),hexCode:'#000'},
                                                            {id:uuid.v1(),hexCode:'#000'}
                                        ]},
    
                {title:"Contrast (30%) - ex. text",hexs:[{id:uuid.v1(),hexCode:'#000'},
                                                        {id:uuid.v1(),hexCode:'#000'},
                                                        {id:uuid.v1(),hexCode:'#000'}
                ]},
    
                {title:"Accents (10%) - ex. buttons",hexs:[{id:uuid.v1(),hexCode:'#000'},
                                                            {id:uuid.v1(),hexCode:'#000'},
                                                            {id:uuid.v1(),hexCode:'#000'}
                ]}],
                projectFonts:[{title:"Title",font:"Arial",size:"18px"},
                              {title:"Subtitle",font:"Helvetica",size:"16px"},
                              {title:"Paragraph",font:"Verdana",size:"12px"},
                 ],
  
                priceDebut: priceDebut,
                priceRequired: priceRequired,
                stateOfAdvance: stateOfAdvance,
                description: description,
                subtype: subtype,
                type: type,
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

            console.log('--------------req booody 1-------------', req.body)

            let specification = req.body.filter((v, k) => k !== 0)
            console.log('---------specification ------', specification)

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
            console.log('--------------req booody -------------', req.body)

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



    updateSpecProject : async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newSpecification = req.body.specification
            console.log('sended spec ',JSON.stringify(req.body));
            const projet = await Projets.findById(req.params.id)
             console.log('prj spec---------------',JSON.stringify(projet)+'id= '+req.params.id);
            if (projet) {
                projet.specification = newSpecification || projet.specification
                console.log('it enter');
                const updatedProject = await projet.save()
                console.log('updatedSpecProject----------', updatedProject)
                res.json({ msg: 'Update spec prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update spec prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

    updateColorsProject : async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newColors = req.body.colorsState
            console.log('sended Colors ',JSON.stringify(req.body));
            const projet = await Projets.findById(req.params.id)
             console.log('prj Colors---------------',JSON.stringify(projet)+'id= '+req.params.id);
            if (projet) {
                projet.projectColors = newColors || projet.projectColors
                const updatedProject = await projet.save()
                console.log('updatedColorsProject----------', updatedProject)
                res.json({ msg: 'Update colors prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update colors prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

    updateFontsProject: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newFonts = req.body.fontStyles
            console.log('sended fonts ',JSON.stringify(req.body));
            const projet = await Projets.findById(req.params.id)
             console.log('prj fonts---------------',JSON.stringify(projet)+'id= '+req.params.id);
            if (projet) {
                projet.projectFonts = newFonts || projet.projectFonts
                const updatedProject = await projet.save()
                console.log('updatedfontsProject----------', updatedProject)
                res.json({ msg: 'Update colors prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update fonts prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

    updateContentProject: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newContents = req.body.Contents
            console.log('sended contents ',JSON.stringify(req.body));
            const projet = await Projets.findById(req.params.id)
             console.log('prj contents---------------',JSON.stringify(projet)+'id= '+req.params.id);
            if (projet) {
                projet.contents = newContents || projet.contents
                const updatedProject = await projet.save()
                console.log('updatedcontentsProject----------', updatedProject)
                res.json({ msg: 'Update contents prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update contents prj error-------------', err)
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
    
}
module.exports = projetsCtrl
