import express from 'express';

import {
    getAudioStream
} from '../controllers/streaming.controller.js'

const router = express.Router();
console.log('Registering /stream/:videoId endpoint...');

router.route('/:videoId').get(getAudioStream)

export default router;