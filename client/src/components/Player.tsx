import ReactPlayer from 'react-player'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

interface PlayerProps {
    streamURL: string,
    songDuration: string,
    isPlaying: boolean,
}

const Player: React.FC<PlayerProps> =  ({ streamURL, isPlaying }) => {

    const playerRef = useRef<ReactPlayer>(null);

    const reactPlayer = playerRef.current;
    console.log(streamURL)



    if (!streamURL) return null

    return (

      <>
        
        <ReactPlayer ref={playerRef} url={streamURL} style={{ display: 'none' }} playing={isPlaying} preload='true' buffersize={60} />

      </>
   
    )
    
}

export default Player;
