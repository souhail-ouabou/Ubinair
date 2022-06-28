export const checkImage = (file) => {
    const types = ['image/png', 'image/jpeg']
    let err = ''
    if (!file) return (err = 'File does not exist.')

    if (file.size > 1024 * 1024)
        // 1mb
        err = 'The largest image size is 1mb'

    if (!types.includes(file.type)) err = 'The image type is png / jpeg'

    return err
}

export const imageUpload = async (images) => {
    let imgArr = []
    for (const item of images) {
        const formData = new FormData()

        if (item.camera) {
            formData.append('file', item.camera)
        } else {
            formData.append('file', item)
        }

        formData.append('upload_preset', 'tu2h5dmi')
        formData.append('cloud_name', 'eduspace')

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/eduspace/upload',
            {
                method: 'POST',
                body: formData,
            }
        )

        const data = await res.json()
        imgArr.push({ public_id: data.public_id, url: data.secure_url })
    }
    return imgArr
}
