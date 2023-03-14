import ReactPlayer from 'react-player'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

interface PlayerProps {
    streamURL: string,
    isPlaying: boolean,
    handleTrackProgress: (progress: number) => void;
}

const Player: React.FC<PlayerProps> =  ({ streamURL, isPlaying, handleTrackProgress }) => {

  const playerRef = useRef<ReactPlayer>(null);
  const [progress, setProgress] = useState<number>(0);

  const reactPlayer = playerRef.current;

  
  function handleOnProgress(state: number) {

    if (reactPlayer) {
      
      const currentTime = reactPlayer.getCurrentTime();
      const duration = reactPlayer.getDuration();
      const progress = (currentTime / duration) * 100;
      handleTrackProgress(progress)
    }
  }




    if (!streamURL || streamURL === '') return null

    return (

      <>
        
        <ReactPlayer ref={playerRef} url={streamURL} style={{ display: 'none' }} onProgress={(progress) => handleOnProgress(progress.playedSeconds)} playing={isPlaying} preload='true' buffersize={60} />

      </>
   
    )
    
}

export default Player;
