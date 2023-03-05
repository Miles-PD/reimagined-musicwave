import express from 'express';

import {
    searchForSong,
} from '../controllers/videoSearch.controller.js'

const router = express.Router();

router.route('/req_song/:search_term').get(searchForSong)

export default router;