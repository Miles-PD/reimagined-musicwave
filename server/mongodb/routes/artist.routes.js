import express from 'express';

import {
    getArtistDiscography
} from '../controllers/artist.controller.js'

const router = express.Router();

router.route('/:name').get(getArtistDiscography)

export default router;