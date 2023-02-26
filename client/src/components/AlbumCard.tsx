import { Link } from 'react-router-dom';

import What from '../assets/whats.jpg'

interface AlbumCardProps {
    album_id?: String | undefined,
    title: String,
    artist: String,
    label: String,
    genre: String,
    khz: Number,
    bitrate: Number,
    numTracks: Number,
    runtime: Number,
}


const AlbumCard: React.FC<AlbumCardProps> = ({ album_id, title, artist, label, genre, khz, bitrate, numTracks, runtime  }) => {
    return (
        <div className='flex rounded-lg flex-col w-[200px] h-[300px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer'>
             <div className="relative w-full h-50 group">
             <img alt="song_img" src={What} className=" w-[200px] h-[200px]" />
             </div>

             <div className='flex flex-col'>
                <span className='ml-1 mt-[5px] text-[13px]'>{title}</span>
                <span className='ml-1 text-left text-[12px] uppercase font-extrabold mt-[3px]'>{artist}</span>
                <div className='ml-1 mt-7 min-w-[30px] text-[12px]'>
                    <>
                        {khz}khz · {bitrate}bit
                    </>
                </div>
             </div>
        </div>
    )
}

export default AlbumCard;