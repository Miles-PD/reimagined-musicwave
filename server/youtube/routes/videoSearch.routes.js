import express from 'express';

import {
    searchForSong,
    getSongDuration
} from '../controllers/videoSearch.controller.js'

const router = express.Router();

router.route('/req_song/:search_term').get(searchForSong)
router.route('/req_song/:videoId').get(getSongDuration)

export default router;