import User from '../models/user.js'
import Album from '../models/album.js'


const getAllAlbumsFromLabel = async (req, res) => {
    try {
        const labelName = req.params.label
        const discography = await Album.find({ label: labelName })

        res.json(discography);

    } catch (error) {
        res.status(500).json({ msg: error.message })
        }
}

export {
    getAllAlbumsFromLabel,
}