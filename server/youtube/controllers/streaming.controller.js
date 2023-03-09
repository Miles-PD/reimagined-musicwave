import * as dotenv from 'dotenv'
import youtubedl from 'youtube-dl-exec'
import axios from 'axios';

dotenv.config();

const getAudioStream = async (req, res) => {
   

        const { videoId } = req.params;
        const videoIdRegex = /^[A-Za-z0-9_-]{11}$/;

        if (!videoIdRegex.test(videoId)) {
            res.status(400).send('Invalid video ID');
            return;
          }

        const url = `https://www.youtube.com/watch?v=${videoId}`;
        console.log(`Fetching data from YouTube for URL: ${url}`);

        const audioOptions = {
            format: "bestaudio",
            noCheckCertificate: true,
            noWarnings: true,
            preferFreeFormats: true,
            extractorArgs: ['-x', '--audio-format', 'mp3', '-q', '-o', '-', '--'],
          };
        
          youtubedl(url, audioOptions, { stdio: ["ignore", "pipe", "ignore"] }).then(
            (audioStream) => {
              res.set("Content-Type", "audio/mpeg");
              console.log("logging")
              audioStream.pipe(res);
            }
          ) .catch((err) => {
                res.status(400).send(err);
            });
    };

export {
    getAudioStream
}