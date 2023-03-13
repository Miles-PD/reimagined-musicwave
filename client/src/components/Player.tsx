import ReactPlayer from 'react-player'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

interface PlayerProps {
    streamURL: string,
    songDuration: string,
    isPlaying: boolean,
}

const Player: React.FC<PlayerProps> =  ({ streamURL, isPlaying, songDuration }) => {

    const playerRef = useRef<ReactPlayer>(null);
    const prevStreamRef = useRef<string>('');

    const reactPlayer = playerRef.current;
    console.log(streamURL)

  



    if (!streamURL) return null

    return (

      <>
        
        <ReactPlayer ref={playerRef} url={streamURL} style={{ display: 'none' }} playing={isPlaying} preload='true' />

      </>
   
    )
    
}

export default Player;
