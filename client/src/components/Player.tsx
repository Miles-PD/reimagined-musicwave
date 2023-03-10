import ReactPlayer from 'react-player/youtube'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

interface PlayerProps {
    videoId: string | null,
    songDuration: string,
    isPlaying: boolean,
    handlePlayClicked?: () => void,
    handlePauseClicked?: () => void,
}

const Player: React.FC<PlayerProps> =  ({ videoId, isPlaying, songDuration, handlePlayClicked, handlePauseClicked  }) => {

    const audioRef = useRef<HTMLAudioElement>(null);

    //const [obtainedStream, setObtainedStream] = useState<string>('');

    const timeArray = songDuration.split(':');
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    const secondsFromStart = minutes * 60 + seconds; // convert to total seconds

    const audio = audioRef.current;

    useEffect(() => {

      if (audio) {

        const playAudio = async () => {
          console.log('entered first time')
          const stream = await axios.get(`http://localhost:8080/api/v1/stream/${videoId}`);
          const obtainedStream = stream?.data?.streamURL
          audio.src = obtainedStream;
          audio.play();
        };

        playAudio();

      }
    },[])

   


    return (

      <>
        <audio ref={audioRef} style={{ display: 'none' }}  />

      </>
   
    )
    
}

export default Player;

      //             start: Math.floor(secondsFromStart / 4),
      //             end: Math.floor(secondsFromStart / 4) + 30,