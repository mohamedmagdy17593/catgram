import cloudinary from 'cloudinary'

export async function cloudinaryUpload(image, folder) {
  let result = await cloudinary.v2.uploader.upload(image, {
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME,
    folder,
  })

  return result.secure_url
}
