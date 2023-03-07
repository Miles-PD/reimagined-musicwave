import express from 'express';

import {
    getAudioStream
} from '../controllers/streaming.controller.js'

const router = express.Router();

router.route('/stream/:videoId').get(getAudioStream)

export default router;