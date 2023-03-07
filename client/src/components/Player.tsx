import ReactPlayer from 'react-player/youtube'

interface PlayerProps {
    youtubeLink: string,
    songDuration: string,
    handlePlayClicked?: () => void,
    handlePauseClicked?: () => void,


}

const Player: React.FC<PlayerProps> =  ({ youtubeLink, songDuration, handlePlayClicked, handlePauseClicked  }) => {

    const timeArray = songDuration.split(':');
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    const secondsFromStart = minutes * 60 + seconds; // convert to total seconds

    return (

        <ReactPlayer
            className="absolute top-2/4 left-2/4 "
            url={youtubeLink}
            origin="https://www.youtube.com"
            controls={true}
            volume={1}
            muted={true}
            autoPlay={true}
            width='30%'
            height='30%'
            opts={{
                playerVars: {
                  start: Math.floor(secondsFromStart / 4),
                  end: Math.floor(secondsFromStart / 4) + 30,
                  autoplay: 1,
                },
              }}
      />
   
    )
    
}

export default Player;