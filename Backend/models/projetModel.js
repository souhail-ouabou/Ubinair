const mongoose = require('mongoose')

const featuresSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true, default: 0 },
        case: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
)
const specificationSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        progresState: {
            type: Number,
            required: true,
            default: 0,
            minimum: 0,
            maximum: 100,
        },
    }
)

const projetSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Users', //relation betwen the projet and the user
        },
        name: {
            type: String,
            //  required: true,
            // default: 'untitled',
        },
        image: {
            type: String,
            default: 'https://i.imgur.com/ouOr3VY.jpg',
        },
        devis: {
            type: Number,
            required: true,
            default: 0,
        },
        priceDebut: {
            type: Number,
            required: true,
            default: 0,
        },
        priceRequired: {
            type: Number,
            required: true,
            default: 0,
        },
        type: {
            type: String,
            required: true,
            maxLength: 20,
        },
        subtype: {
            type: String,
            required: true,
            maxLength: 20,
        },
        plan: {
            type: String,
            required: true,
        },
        stateOfAdvance: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        features: [featuresSchema],
        specification:[specificationSchema]
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Projet', projetSchema)
