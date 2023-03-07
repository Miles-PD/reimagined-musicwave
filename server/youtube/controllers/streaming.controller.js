import * as dotenv from 'dotenv'
import { exec } from 'youtube-dl-exec'
import axios from 'axios';

dotenv.config();

const getAudioStream = async (req, res) => {
    try {
        const { videoId } = req.params;

        const stream = exec(videoId, {
            quality: 'highestaudio',
            filter: 'audioonly',
            format: 'mp3'
          });
          res.setHeader('Content-Type', 'audio/mpeg');
          stream.pipe(res);


    } catch (error) {
    res.status(500).json({ msg: error.message })
    }
}