import express from 'express';

import {
    getAllAlbums,
    getAlbumDetail,
    getAlbumArtwork
} from '../controllers/album.controller.js'

const router = express.Router();

router.route('/').get(getAllAlbums)
router.route('/:id').get(getAlbumDetail)
router.route('/artwork/:id').get(getAlbumArtwork)

export default router;