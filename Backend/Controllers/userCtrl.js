const asyncHandler = require('express-async-handler')
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
//@desc  Get goals
//@route  Get /api/test
//@acces  Get Private

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

const userCtrl = {
    register: async (req, res) => {
        let newUser
        console.log(req.body)
        //get email and the password from the frontend
        //whenever have a post request u get all the data through the req.body
        //create the user but first hash the pwd

        try {
            // http://localhost:5000/user/register
            const { name, email, password, isClient, phone, description } =
                req.body
            //console.log(isTeacher)
            if (!name || !email || !password)
                return res
                    .status(400)
                    .json({ msg: 'Please fill in all fields.' })

            if (!validateEmail(email))
                return res.status(400).json({ msg: 'Invalid email' })

            const user = await Users.findOne({ email })
            if (user)
                return res
                    .status(400)
                    .json({ msg: 'This email already exists.' })

            if (password.length < 6)
                return res
                    .status(400)
                    .json({ msg: 'Password must be at least 6 characters.' })

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({
                name,
                email,
                phone,
                description,
                password: passwordHash,
            })
            await newUser.save()

            res.json({
                msg: 'Register Success! Please activate your email to start.',
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = userCtrl
