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

const getAllAlbums = async (req, res) => {


    try {
        console.log(`Using collection: ${Album.collection.name}`);
        const albums = await Album.find({})  //find all albums in db

        console.log(`Found ${albums.length} albums`);

        res.status(200).json(albums)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}; 

const getAlbumDetail = async (req, res) => {}; 

export {
    getAllAlbums,
    getAlbumDetail
}