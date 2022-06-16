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
        public_id: { type: String },
        fileName: { type: String },
        secure_url: { type: String },
        format: { type: String },
        sizeInBytes: { type: String },
    },
    {
        timestamps: true,
    }
)
const visualInspirationSchema = mongoose.Schema(
    {
        public_id: { type: String },
        secure_url: { type: String },
        format: { type: String },
        sizeInBytes: { type: String },
    },
    {
        timestamps: true,
    }
)

const contentsSchema = mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, default: "Example title" },
        description: { type: String,  default: "Description" },
        media : [fileBriefSchema]
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

const projectFontStylesSchema = mongoose.Schema(
    {
        title: { type: String, required: true},
        font: { type: String, required: true},
        size: { type: String, required: true},
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
    brandName: {
        type: String,
        // required: [true, 'Please enter your name!'],
        // trim: true,
    },
    brandTageLine: {
        type: String,
        // required: [true, 'Please enter your email!'],
        // trim: true,
        // unique: true,
    },
    ProductService: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    values: {
        type: String,
    },
    vision: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    mission: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    objectives: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    toneOfVoice: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    targetAudience: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    competitors: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    moreInfo: {
        type: String,
        // required: [true, 'Please enter your phone!'],
        // trim: true,
        // unique: true,
    },
    websiteInspiration: {
        type: String,
    },
    briefFiles: [fileBriefSchema],
    visualInspiration: [visualInspirationSchema],
})
const filesSchema = mongoose.Schema({
    QuotesFiles: [fileBriefSchema],
    InvoicesFiles: [fileBriefSchema],
})


const projectColorHexSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        hexCode: { type: String, required: true},
      
    },
   
)

const projectColorsSchema = mongoose.Schema(
    {
        title: { type: String, required: true},
        hexs:[projectColorHexSchema],
    },
  
)
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
    projectColors:[projectColorsSchema],
    projectFonts:[projectFontStylesSchema],
    totalProgresState: {
        type: Number,
        required: true,
        default: 0,
        maximum: 0,
        minimum: 0,
    },
    clientTaskss: [clientTaskssSchema],
    contents:[contentsSchema],
    clientBrief: clientBriefSchema,
    files: filesSchema,
    // projectTasks:[projectTasksSchema],
    finishedAt: {
        type: Date,
        default: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Projet', projetSchema)
