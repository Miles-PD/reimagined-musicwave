import { isPlain } from '@reduxjs/toolkit';
import { FaPlay, FaPauseCircle } from 'react-icons/fa'


interface PoPProps {
    isPlaying?: boolean,
    activeTitle: string,
    title: string,
    requestedSong?: string,
    handlePlay: () => void,
    handlePause: () => void
}



const PlayOrPause: React.FC<PoPProps> = ({ handlePlay, handlePause, isPlaying, activeTitle, title }) => {

    console.log(isPlaying, 'inpop')

    return (
        isPlaying && activeTitle === title ? 
            <FaPauseCircle onClick={handlePause} />
            : <FaPlay onClick={handlePlay} />
    )
}


export default PlayOrPause