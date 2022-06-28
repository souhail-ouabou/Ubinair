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
                        folder: 'Ubinair/Moodboard',
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
    uploadAboutBrand: async (req, res) => {
        try {
            const { files } = req.body
            //  console.log('req body : ', req.body)
            let promises = []
            files.forEach(async (file) => {
                promises.push(
                    cloudinary.v2.uploader.upload(file.base, {
                        folder: 'Ubinair/AboutBrand',
                        tags: file.file.path,
                        //context : file.file.path,

                        // flags: 'attachment:your_pdf',
                        // fetch_format: 'auto'
                        // resource_type: 'raw',
                        // raw_convert: 'aspose',
                    })
                )

                // newData.push(promises,file.file.path)
            })

            const response = await Promise.all(promises)
            res.send(response)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteFile: async (req, res) => {
        try {
            const { public_id } = req.body

            const response = await cloudinary.uploader.destroy(public_id)

            res.send(response)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteImgMoodBoard: async (req, res) => {
        try {
            const { public_id } = req.body

            const response = await cloudinary.uploader.destroy(public_id)

            res.send(response)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    uploadQuotes: async (req, res) => {
        try {
            const { files } = req.body
            //   console.log('req body : ', req.body)
            let promises = []
            files.forEach(async (file) => {
                promises.push(
                    cloudinary.v2.uploader.upload(file.base, {
                        folder: 'Ubinair/Quotes',
                        tags: file.file.path,
                        //context : file.file.path,

                        // flags: 'attachment:your_pdf',
                        // fetch_format: 'auto'
                        // resource_type: 'raw',
                        // raw_convert: 'aspose',
                    })
                )

                // newData.push(promises,file.file.path)
            })

            const response = await Promise.all(promises)
            res.send(response)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    uploadInvoices: async (req, res) => {
        try {
            const { files } = req.body
            //  console.log('req body : ', req.body)
            let promises = []
            files.forEach(async (file) => {
                promises.push(
                    cloudinary.v2.uploader.upload(file.base, {
                        folder: 'Ubinair/Invoices',
                        tags: file.file.path,
                        //context : file.file.path,

                        // flags: 'attachment:your_pdf',
                        // fetch_format: 'auto'
                        // resource_type: 'raw',
                        // raw_convert: 'aspose',
                    })
                )

                // newData.push(promises,file.file.path)
            })

            const response = await Promise.all(promises)
            res.send(response)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    uploadMedia: async (req, res) => {
        try {
            const { images } = req.body
            //  console.log('req body : ', req.body)
            let promises = []
            images.forEach(async (img) => {
                promises.push(
                    cloudinary.v2.uploader.upload(img.base, {
                        folder: 'Ubinair/Media',
                        tags: img.image.path,
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
