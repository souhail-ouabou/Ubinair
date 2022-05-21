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

            console.log('--------------req booody-------------', req)
            const projet = new Projets({
                user: req.user.id,
                name: 'Sample name',
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
            })
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

            const sub = projects.specification.map(
                (project) => project.estimatedState
            )
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i]
            }
            let total =  Math.round(sum / sub.length)

            if (projects) {
                projects.totalProgresState = total 
            }
            const updatedProjet = await projects.save();
            res.json( updatedProjet )
        } catch (error) {
            console.log('------------project details error----------')
            console.log(error)
            return res.status(500).json({ msg: error.message })
        }
    },
}
module.exports = projetsCtrl
