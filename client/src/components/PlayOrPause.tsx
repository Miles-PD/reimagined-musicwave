import { isPlain } from '@reduxjs/toolkit';
import { FaPlay, FaPauseCircle } from 'react-icons/fa'


interface PoPProps {
    isPlaying?: boolean,
    activeURL?: string,
    requestedSong?: string,
    handlePlay: () => void;
}

const PlayOrPause: React.FC<PoPProps> = ({ handlePlay, isPlaying, activeURL, requestedSong }) => (1 ? (

            <FaPlay onClick={handlePlay} />
    
    ) : (
            <FaPauseCircle />
));


export default PlayOrPause