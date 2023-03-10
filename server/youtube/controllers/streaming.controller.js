import * as dotenv from 'dotenv'
import youtubedl from 'youtube-dl-exec'
import axios from 'axios';

dotenv.config();

const getAudioStream = async (req, res) => {
   
    try {

        const { videoId } = req.params;
  
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        

        
          youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
          })
          .then(
            (output) => {

              const sortBy = (key, ext) => {
                return (a, b) => {
                  if (a.ext === ext && b.ext === ext) {
                    return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
                  } else if (a.ext === ext) {
                    return -1;
                  } else if (b.ext === ext) {
                    return 1;
                  } else {
                    return 0;
                  }
                };
              };
              
              const best = output.formats.sort(sortBy('tbr', 'm4a'))[0]; 
               

              //const audioURL = output.formats[10].url;
              res.json({ streamURL: best.url })
            }
          )} catch(err)  {
                console.log(err);
            };
    };

export {
    getAudioStream
}