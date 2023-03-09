import * as dotenv from 'dotenv'
import youtubedl from 'youtube-dl-exec'
import axios from 'axios';

dotenv.config();

const getAudioStream = async (req, res) => {
   
    try {

        const { videoId } = req.params;
  
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        console.log(`Fetching data from YouTube for URL: ${url}`);

        
          youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
          })
          .then(
            (audioStream) => {

              const audioURL = audioStream.formats[10].url;
              res.json(audioStream)
            }
          )} catch(err)  {
                console.log(err);
            };
    };

export {
    getAudioStream
}