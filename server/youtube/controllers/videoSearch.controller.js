import * as dotenv from 'dotenv'
import axios from 'axios';

dotenv.config();


const searchForSong = async (req, res) => {
    try {
    const { artist, songTitle } = req.params.query;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        type: 'video',
        part: 'id,snippet',
        q: `${artist} ${songTitle}`,
        maxResults: 1,
      },
    });

    // Get URL of first result
    const videoId = response.data.items[0].id.videoId;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  
    res.json({ url: videoUrl });

  } catch (error) {
    res.status(500).json({ msg: error.message })
    }
}  
  
export {
    searchForSong,
};


