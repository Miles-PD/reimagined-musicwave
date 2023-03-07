import * as dotenv from 'dotenv'
import axios from 'axios';

dotenv.config();


const searchForSong = async (req, res) => {
    try {
      const { search_term } = req.params;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        type: 'video',
        part: 'id,snippet',
        q: search_term,
        maxResults: 1,
      },
    });

    // Get URL of first result
    const videoId = response.data.items[0].id.videoId;
    //const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  
    res.json({ id: videoId });

  } catch (error) {
    res.status(500).json({ msg: error.message })
    }
}  

const getSongDuration = async (req, res) => {
  try {

    const { videoId } = req.params;
    const vidContent = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id={${videoId}}&key={${process.env.YOUTUBE_API_KEY}}&part=contentDetails`);

    const vidDuration = vidContent.duration;
    res.json({ duration: vidDuration });


  } catch (error) {
    res.status(500).json({ msg: error.message })
    }
}
  
export {
    searchForSong,
    getSongDuration,
};