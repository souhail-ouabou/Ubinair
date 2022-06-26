const mongoose = require('mongoose')
// import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name!'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter your email!'],
            trim: true,
            unique: true,
        },
        phone: {
            type: String,
            required: [true, 'Please enter your phone!'],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password!'],
        },
        role: {
            type: Number,
            default: 0, // 0 = user, 1 = admin
        },
        client: {
            type: Boolean,
            required: true,
            default: false,
        },
        avatar: {
            type: String,
            default: 'https://i.imgur.com/tJOSejv.png',
        },
        description: {
            type: String,
        },
        projets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Projet', //relation betwen the projet and the user
            },
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Users', userSchema)
