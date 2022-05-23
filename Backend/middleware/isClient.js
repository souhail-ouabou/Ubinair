const Users = require('../models/userModel')

const isClient = async (req, res, next) => {
    try {
        const user = await Users.findOne({ _id: req.user.id })
        if (!user.client)
            return res
                .status(500)
                .json({ msg: 'Client resources access denied.' })

        next()
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = isClient
