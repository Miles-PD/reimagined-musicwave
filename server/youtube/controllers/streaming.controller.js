import * as dotenv from 'dotenv'
import youtubedl from 'youtube-dl-exec'
import axios from 'axios';

dotenv.config();

const getAudioStream = async (req, res) => {
   
    try {

        const { videoId } = req.params;
  
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        console.log(`Fetching data from YouTube for URL: ${url}`);

        
          youtubedl(url, ['--format', 'bestaudio', '-o', '-'])
          .then(
            (audioStream) => {
              res.set("Content-Type", "audio/mpeg");
              audioStream.pipe(res);
            }
          )} catch(err)  {
                console.log(err);
            };
    };

export {
    getAudioStream
}