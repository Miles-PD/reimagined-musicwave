import User from '../models/user.js'
import Album from '../models/album.js'

import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const getArtistDiscography = async (req, res) => {
    try {
        const artistName = req.params.name
        const discography = await Album.find({ artist: artistName })

        res.json(discography);

    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}

//for displaying more albums from same artist on page
const getArtistDiscogExceptCurrent = async (req, res) => {
    try {
        const id = req.params.id;
        const album = await Album.findById(id); //ID album so we can then ID the artist

        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        
        const albums = await Album.find({ _id: { $ne: id }, artist: album.artist });
        res.status(200).json(albums)
        
    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}

export {
    getArtistDiscography,
    getArtistDiscogExceptCurrent,
}