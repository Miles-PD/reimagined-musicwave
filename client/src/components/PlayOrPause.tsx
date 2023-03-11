import { isPlain } from '@reduxjs/toolkit';
import { FaPlay, FaPauseCircle } from 'react-icons/fa'


interface PoPProps {
    isPlaying?: boolean,
    activeURL?: string,
    requestedSong?: string,
    handlePlay: () => void,
    handlePause: () => void
}



const PlayOrPause: React.FC<PoPProps> = ({ handlePlay, handlePause, isPlaying, activeURL, requestedSong }) => {

    console.log(isPlaying, 'inpop')

    return (
        isPlaying ? 
            <FaPauseCircle onClick={handlePause} />
            : <FaPlay onClick={handlePlay} />
    )
}


export default PlayOrPause