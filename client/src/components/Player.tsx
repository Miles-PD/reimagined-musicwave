import ReactPlayer from 'react-player/youtube'

interface PlayerProps {
    youtubeLink: string,
    handlePlayClicked?: () => void,
    handlePauseClicked?: () => void

}

const Player: React.FC<PlayerProps> =  ({ youtubeLink, handlePlayClicked, handlePauseClicked  }) => {

    return (

        <ReactPlayer
            className="absolute top-2/4 left-2/4 "
            url={youtubeLink}
            controls={true}
            width='30%'
            height='30%'
      />
   
    )
    
}

export default Player;