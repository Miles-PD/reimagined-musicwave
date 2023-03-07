import ReactPlayer from 'react-player/youtube'
import { useState, useRef } from 'react'

interface PlayerProps {
    videoId: string,
    songDuration: string,
    handlePlayClicked?: () => void,
    handlePauseClicked?: () => void,
}

const Player: React.FC<PlayerProps> =  ({ videoId, songDuration, handlePlayClicked, handlePauseClicked  }) => {

  const audioRef = useRef(null);

  const [audio, setAudio] = useState(new Audio());

    const timeArray = songDuration.split(':');
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    const secondsFromStart = minutes * 60 + seconds; // convert to total seconds

    const playAudio = async () => {
      audio.pause();
      audio.src = `http://localhost:8080/api/v1/stream/${videoId}`;
      await audio.play();
    };

    return (

      <>
        <audio ref={audioRef} style={{ display: 'none' }} />

      </>


      //   <ReactPlayer
      //       className="absolute top-2/4 left-2/4 "
      //       url={youtubeLink}
      //       origin="https://www.youtube.com"
      //       controls={true}
      //       volume={1}
      //       muted={true}
      //       autoPlay={true}
      //       width='30%'
      //       height='30%'
      //       opts={{
      //           playerVars: {
      //             start: Math.floor(secondsFromStart / 4),
      //             end: Math.floor(secondsFromStart / 4) + 30,
      //             autoplay: 1,
      //           },
      //         }}
      // />
   
    )
    
}

export default Player;