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
        
        const albums = await Album.find({})  //find all albums in db

        console.log(`Found ${albums.length} albums`);

        res.status(200).json(albums)
    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}; 

// get details for one album user has clicked
const getAlbumDetail = async (req, res) => {
    try {
        //console.log(`Using collection: ${Album.collection.name}`);
        const searchedID = req.params.id;
        const requestedAlbum = await Album.findById(searchedID)

        //console.log(`Found album by ID ${req.params.id}`);

        res.status(200).json(requestedAlbum)
        //console.log(requestedAlbum)

    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}; 

const getAlbumArtwork = async (req, res) => {
    try {
        const albumID = req.params.id;

        cloudinary.api.resource(albumID, { fields: "secure_url"}, (error, secure_url) => {
            
            if (error) {
                console.log(error);
                res.status(500).send('Failed to fetch image');
              } else {
                res.send(secure_url);
              }
        

        });
          
    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}


export {
    getAllAlbums,
    getAlbumDetail,
    getAlbumArtwork,
}