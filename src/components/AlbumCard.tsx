import { Link } from 'react-router-dom';

import What from '../assets/whats.jpg'


const AlbumCard = () => {
    return (
        <div className='flex items-center rounded-lg flex-col w-[200px] h-[300px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer'>
             <img alt="song_img" src={What} className=" w-[200px] h-[200px] rounded-lg" />
        </div>
    )
}

export default AlbumCard;