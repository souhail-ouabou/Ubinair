const asyncHandler = require('express-async-handler')
const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const sendMail = require('./sendMail')
//@desc  Get goals
//@route  Get /api/test
//@acces  Get Private

const { CLIENT_URL } = process.env

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}
function isEmpty(value) {
    if (!value) return true
    return false
}

const userCtrl = {
    register: async (req, res) => {
        let newUser
        // console.log(req.body)
        //get email and the password from the frontend
        //whenever have a post request u get all the data through the req.body
        //create the user but first hash the pwd

        try {
            // http://localhost:5000/user/register
            const { name, email, password, isClient, phone, description } =
                req.body
            //console.log(isTeacher)
            if (!name || !email || !password || !phone)
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

            const newUser = {
                name,
                email,
                phone,

                password: passwordHash,
            }

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            sendMail(email, url, name, 'Verify your email address')

            res.json({
                msg: 'Register Success! Please activate your email to start.',
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    activateEmail: async (req, res) => {
        try {
            //http://localhost:5000/user/activation
            /*register : after the user set the fields we send a request to check 
                if evryething fine and the email not already in DB and set the token with user 
                */
            /* activateEmail: if click to the lien of email that we send it  -  send a req with the token_code(user)
             */
            const { activation_token } = req.body
            const user = jwt.verify(
                activation_token,
                process.env.ACTIVATION_TOKEN_SECRET
            )
            /*console.log(user);
                //that user contain all fields {
                name: 'User 01',
                 email: 'adam7hisoka@gmail.com',
                 password: '$2b$12$6fOX2Q6gm4Fc9yX.HxmX6e0//dlsO2LbYG6m6rmzecOvfv4BAr3a.',
                 iat: 1620786747,
                 exp: 1620787347
                }*/
            const { name, email, password, phone } = user
            //check if the user already registred
            const check = await Users.findOne({ email })
            if (check)
                return res.status(400).json({ msg: 'This email already exist' })
            //if not create one and save it to DB

            const newUser = new Users({ name, email, phone, password })
            await newUser.save()
            res.json({ msg: 'Votre compte a été activé avec succès!' })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) => {
        try {
            //http://localhost:5000/user/login
            const { email, password } = req.body
            const user = await Users.findOne({
                email: { $regex: email, $options: 'i' },
            })
            if (!email || !password)
                return res
                    .status(400)
                    .json({ msg: 'Please fill in all fields.' })
            if (!validateEmail(email))
                return res.status(400).json({ msg: 'Invalid email' })
            if (!user)
                return res
                    .status(400)
                    .json({ msg: "That Email doesn't exist." })

            const isPasswordCorrect = await bcrypt.compare(
                password,
                user.password
            )
            if (!isPasswordCorrect)
                return res.status(400).json({ msg: 'Invalid credentials' })

            //     console.log(existingUser);
            //   // http://localhost:5000/user/refresh_token
            // const refresh_token = createRefreshToken({ id: existingUser._id });
            //     res.cookie("refreshtoken", refresh_token, {
            //         httpOnly: true,
            //         path: "/user/refresh_token",
            //         maxAge: 365 * 24 * 60 * 60 * 1000, // 7 days
            //     });
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                client: user.client,
                token: generateToken(user._id),
            })
        } catch (err) {
            return res.status(400).json({ msg: err.message })
        }
    },
    // getAccessToken: async (req, res) => {
    //     try {
    //         //http://localhost:5000/user/refresh_token
    //         //get theCookie value
    //         const rf_token = req.cookies.refreshtoken
    //         console.log('the token', rf_token)
    //         if (!rf_token)
    //             return res.status(500).json({ msg: 'Please login now!' })

    //         jwt.verify(
    //             rf_token,
    //             process.env.REFRESH_TOKEN_SECRET,
    //             (err, user) => {
    //                 // The validation method returns a decode object that we stored the token in.
    //                 if (err)
    //                     return res
    //                         .status(500)
    //                         .json({ msg: 'Please login now!' })
    //                 console.log(user)
    //                 // if user login in create a token to stay loged in
    //                 const access_token = createAccessToken({ id: user.id })
    //                 res.json({ access_token })
    //             }
    //         )
    //     } catch (err) {
    //         return res.status(500).json({ msg: err.message })
    //     }
    // },
    // getUserInfor: async (req, res) => {
    //   try {
    //     const user = await Users.findById(req.user.id).select("-password");
    //     console.log("finded user",user);
    //     res.json(user);
    //   } catch (err) {
    //     return res.status(500).json({ msg: err.message });
    //   }
    // },
}

const createRefreshToken = (payload) => {
    // The jwt.sign method are used
    // to create token
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {
        expiresIn: '5m',
    })
}
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '30d',
    })
}
const createActivationToken = (payload) => {
    return jwt.sign(payload, `${process.env.ACTIVATION_TOKEN_SECRET}`, {
        expiresIn: '5m',
    })
}
module.exports = userCtrl
