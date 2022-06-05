const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const uploadCtrl = {
    uploadMoodboard: async (req, res) => {
        try {
            const { images } = req.body
            // console.log('images : ', req.body)
            let promises = []
            images.forEach(async (image) => {
                promises.push(
                    cloudinary.v2.uploader.upload(image, {
                        folder: 'Moodboard',
                        crop: 'fill',
                    })
                )
            })
            const response = await Promise.all(promises)
            res.send(response)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = uploadCtrl
