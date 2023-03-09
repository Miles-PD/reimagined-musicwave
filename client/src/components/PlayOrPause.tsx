import { FaPlay } from 'react-icons/fa'


interface PoPProps {
    isPlaying?: boolean,
    handlePlay: () => void;
}

const PlayOrPause: React.FC<PoPProps> = ({ handlePlay }) => {
    return (
        <FaPlay onClick={handlePlay} />
    )
}

export default PlayOrPause