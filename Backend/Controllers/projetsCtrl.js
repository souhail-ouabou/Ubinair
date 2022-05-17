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
                features
            } = req.body

            console.log('--------------req booody-------------', req)
            const projet = new Projets({
                user: req.user.id,
                name: name,
                devis: devis,
                plan: plan,
                features:features,
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
}
module.exports = projetsCtrl
