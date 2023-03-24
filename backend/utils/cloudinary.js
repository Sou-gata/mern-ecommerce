const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const cloudinaryUploadImg = async (fileToUpload) => {
    const res = await cloudinary.uploader.upload(fileToUpload);
    return {
        url: res.url,
        asset_id: res.asset_id,
        public_id: res.public_id,
    };
};

const cloudinaryDeleteImg = async (fileToDelete) => {
    return new Promise((resolve) => {
        cloudinary.uploader.destroy(fileToDelete, (result) => {
            resolve(
                {
                    url: result?.secure_url,
                    asset_id: result?.asset_id,
                    publi_id: result?.publi_id,
                },
                { resource_type: "auto" }
            );
        });
    });
};

module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
