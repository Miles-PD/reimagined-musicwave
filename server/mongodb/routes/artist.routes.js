import express from 'express';

import {
    getArtistDiscography,
    getArtistDiscogExceptCurrent
} from '../controllers/artist.controller.js'

const router = express.Router();

router.route('/:name').get(getArtistDiscography)
router.route('/more/:id').get(getArtistDiscogExceptCurrent)

export default router;