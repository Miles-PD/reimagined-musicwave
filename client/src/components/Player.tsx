import ReactPlayer from 'react-player'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

interface PlayerProps {
    videoId: string,
    songDuration: string,
    isPlaying: boolean,
    handlePlayClicked?: () => void,
    handlePauseClicked?: () => void,
}

const Player: React.FC<PlayerProps> =  ({ videoId, isPlaying, songDuration, handlePlayClicked, handlePauseClicked  }) => {

    const playerRef = useRef<ReactPlayer>(null);

    const [obtainedStream, setObtainedStream] = useState<string>('');
    const obtainedSteamRef = useRef<string>('');

    const prevVideoId = useRef<string>('');

    useEffect(() => {

      prevVideoId.current = videoId;

    },[videoId])

    const timeArray = songDuration.split(':');
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    const secondsFromStart = minutes * 60 + seconds; // convert to total seconds


    const reactPlayer = playerRef.current;

    

    useEffect(() => {

      if (reactPlayer) {

        // fade in at beginning and end of track preview
        

        const playAudio = async () => {
          try {
            console.log('entered first time');
            const stream = await axios.get(`http://localhost:8080/api/v1/stream/${videoId}`);
            obtainedSteamRef.current = stream?.data?.streamURL;
          } catch (err) {
            console.error('error getting stream:', err);
          }
        };


        playAudio();

      
      }
    },[videoId]);


    return (

      <>
        
        <ReactPlayer ref={playerRef} url={obtainedSteamRef.current} style={{ display: 'none' }} playing={isPlaying} />

      </>
   
    )
    
}

export default Player;
