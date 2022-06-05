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
const clientTaskssSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        text: { type: String, required: true },
        isCompleted: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
)
const fileBriefSchema = mongoose.Schema(
    {
        filename: { type: String, required: true },
        secure_url: { type: String, required: true },
        format: { type: String, required: true },
        sizeInBytes: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)
const visualInspirationSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        secure_url: { type: String, required: true },
        format: { type: String, required: true },
        sizeInBytes: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const projectTasksSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        title: { type: String, required: true },
        state: { type: Number, required: true },
        // genre: { type: String, required: true},
        date: { type: Date, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const specificationSchema = mongoose.Schema({
    title: { type: String, required: true },
    progresState: {
        type: Number,
        required: true,
        default: 0,
        minimum: 0,
        maximum: 100,
    },
    estimatedState: {
        type: Number,
        required: true,
        default: 0,
        minimum: 0,
        maximum: 100,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    projectTasks: [projectTasksSchema],
})
const clientBriefSchema = mongoose.Schema({
    // brandName: {
    //     type: String,
    //     // required: [true, 'Please enter your name!'],
    //     trim: true,
    // },
    // brandTageLine: {
    //     type: String,
    //     required: [true, 'Please enter your email!'],
    //     trim: true,
    //     unique: true,
    // },
    // ProductService: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // values: {
    //     type: Date,
    //     default: Date.now,
    // },
    // vision: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // mission: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // objectives: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // toneOfVoice: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // targetAudience: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // competitors: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // moreInfo: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    // briefFile: [fileBriefSchema],
    // websiteInspiration: {
    //     type: String,
    //     required: [true, 'Please enter your phone!'],
    //     trim: true,
    //     unique: true,
    // },
    visualInspiration: [visualInspirationSchema],
    
})

const projetSchema = mongoose.Schema({
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
    specification: [specificationSchema],
    totalProgresState: {
        type: Number,
        required: true,
        default: 0,
        maximum: 0,
        minimum: 0,
    },
    clientTaskss: [clientTaskssSchema],
    clientBrief: clientBriefSchema,
    // projectTasks:[projectTasksSchema],
    finishedAt: {
        type: Date,
        default: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Projet', projetSchema)
