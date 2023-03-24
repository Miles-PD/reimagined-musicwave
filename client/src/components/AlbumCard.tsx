import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface AlbumCardProps {
    _id: string; 
    title: String,
    artist: String,
    label: String,
    genre: String,
    khz: Number,
    bitrate: Number,
    numTracks: Number,
    runtime: Number,
}


const AlbumCard: React.FC<AlbumCardProps> = ({ _id, title, artist, label, genre, khz, bitrate, numTracks, runtime  }) => {

    const [artwork, setArtwork] = useState<AxiosResponse | null | any | void>([]);

    useEffect(() => {



        const fetchArtwork = async () => {
            try {
                const artwork = await axios.get(`http://localhost:8080/api/v1/album/artwork/${_id}`);

                setArtwork(artwork.data.secure_url)

            } catch (error) {
                console.log("Error getting artwork:", error);
              }
        }

        fetchArtwork();
 
        

    }, [])


    return (
        <Link to={`/album/${_id}`}>
            <div className='flex rounded-lg flex-col w-[220px] h-[300px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer'>
                <div className="relative w-full h-50 group">
                <img alt="song_img" src={artwork} className=" w-[220px] h-[220px]" />
                </div>

                <div className='flex flex-col'>
                    <span className='ml-1 mt-[5px] text-[13px]'>{title}</span>
                    <span className='ml-1 text-left text-[12px] uppercase font-extrabold mt-[3px]'>{artist}</span>
                    <div className='ml-1 mt-7 min-w-[30px] text-[12px]'>
                        <>
                            {khz}kHz · {bitrate}bit
                        </>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AlbumCard;