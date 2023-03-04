import User from '../models/user.js'
import Album from '../models/album.js'


const getAllAlbumsFromGenre = async (req, res) => {
    try {
        const genreName = req.params.genre
        const discography = await Album.find({ genre: genreName })

        res.json(discography);

    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}

export {
    getAllAlbumsFromGenre,
}