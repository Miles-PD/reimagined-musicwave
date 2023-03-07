import * as dotenv from 'dotenv'
import exec from 'youtube-dl-exec'
import axios from 'axios';

dotenv.config();

const getAudioStream = async (req, res) => {
    try {

        const { videoId } = req.params;
        const url = `https://www.youtube.com/watch?v=${videoId}`;

        const stream = exec(url, ['-x', '--audio-format', 'mp3', '-q', '-o', '-', '--']);
          res.setHeader('Content-Type', 'audio/mpeg');
          stream.pipe(res);

    } catch (error) {
    res.status(500).json({ msg: error.message })
    }
}

export {
    getAudioStream
}