import express from 'express';

import {
    getAllAlbums,
    getAlbumDetail
} from '../controllers/album.controller.js'

const router = express.Router();

router.route('/').get(getAllAlbums)
router.route('/:id').get(getAlbumDetail)

export default router;