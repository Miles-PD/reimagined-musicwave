import ReactPlayer from 'react-player/youtube'
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

    const audioRef = useRef<HTMLAudioElement>(null);

    //const [obtainedStream, setObtainedStream] = useState<string>('');

    const prevVideoId = useRef<string>('')

    useEffect(() => {

      prevVideoId.current = videoId

    },[videoId])

    const timeArray = songDuration.split(':');
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    const secondsFromStart = minutes * 60 + seconds; // convert to total seconds

    const audio = audioRef.current;

    

    useEffect(() => {

      if (audio) {

        // fade in at beginning and end of track preview
        const fadeInTime = 2;
        const fadeOutTime = 2;
        const fadeDuration = 2;

        let fadeInTimeoutId: number | null = null;
        let fadeOutTimeoutId: number | null = null;

        const fade = (volume: number, targetVolume: number) => {
          const volumeStep = (targetVolume - volume) / (fadeDuration * 10);
          let newVolume = volume;
          const fadeInterval = setInterval(() => {
            newVolume += volumeStep;
            if (newVolume < 0) {
              newVolume = 0;
            } else if (newVolume > 1) {
              newVolume = 1;
            }
            audio.volume = newVolume;
            if (Math.abs(newVolume - targetVolume) < 0.01) {
              clearInterval(fadeInterval);
            }
          }, 100);
        };

        const playAudio = async () => {
          console.log('entered first time')
          const stream = await axios.get(`http://localhost:8080/api/v1/stream/${videoId}`);
          const obtainedStream = stream?.data?.streamURL
          audio.src = obtainedStream;
          audio.play();
        };

        const handlePlay = () => {
          if (!fadeInTimeoutId) {
            fadeInTimeoutId = window.setTimeout(() => {
              fadeInTimeoutId = null;
              fade(0, 1);
            }, fadeInTime * 1000);
          }
        };
    
        const handleTimeUpdate = () => {
          const currentTime = audio.currentTime;
          const totalDuration = audio.duration;
          if (!fadeOutTimeoutId && totalDuration - currentTime <= fadeOutTime) {
            fadeOutTimeoutId = window.setTimeout(() => {
              fadeOutTimeoutId = null;
              fade(1, 0);
            }, (fadeOutTime - (totalDuration - currentTime)) * 1000);
          }
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        playAudio();

        return () => {
          audio.removeEventListener('play', handlePlay);
          audio.removeEventListener('timeupdate', handleTimeUpdate);
        };

      }
    },[videoId])

    useEffect(() => {
      
      if (audio) {
        if (isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
    }
    }, [isPlaying]);

   


    return (

      <>
        <audio ref={audioRef} style={{ display: 'none' }}  />

      </>
   
    )
    
}

export default Player;

      //             start: Math.floor(secondsFromStart / 4),
      //             end: Math.floor(secondsFromStart / 4) + 30,