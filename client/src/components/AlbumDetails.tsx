import What from '../assets/whats.jpg'
import TracksListing from './TracksListing';
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react";

interface AlbumDetailsProps {
    id?: string
}

type AlbumType = {
    _id: string,
    title: string,
    artist: string,
    label: string,
    genre: string,
    khz: number,
    bitrate: number,
    numTracks: number,
    runtime: number,
    parental: boolean,
    tracks: {
      trackTitles: string[],
      trackLengths: string[]
    }
  }

const AlbumDetails: React.FC<AlbumDetailsProps> = ({ id }) => {

    const [albums, setAlbums] = useState<AxiosResponse | AlbumType | null | any | void>([]);

    useEffect(() => {

        const fetchAlbum = async () => {
            try {
                const albumData = await axios.get(`http://localhost:8080/api/v1/album/${id}`)
                
                setAlbums(albumData.data);
            } catch (error) {
                console.log(error);
              }
        }

        fetchAlbum();
 
        

    }, [])

    
    console.log(albums)
    
    return (
        <div className='block'>
            <div className="flex flex-row relative py-[15px] px-[50px] min-h-100">
                <img alt="album_cover" src={What} className="flex basis-[300px] w-[300px] h-[300px] mr-[25px]" />

                <div className="relative w-full">
                    <div className="mr-[110px]">

                        {/* Left side album details */}
                        <h2 className="flex mb-[5px]">
                            <span className="text-xl font-bold text-blue-600/100">Sgt. Pepper's Lonely Hearts Club Band (Deluxe Anniversary Edition)</span>
                        </h2>
                        <p className="text-bold uppercase mb-[5px]"> 
                            <a className='text-black'>the beatles</a>
                        </p>
                        <p className='text-[15px] m-0'>
                            <a>label here</a>
                        </p>
                        <p className='text-[15px] m-0'>
                            <a>genre here</a>
                        </p>
                        <p className='text-[15px] mb-2.5'>
                            96kHz · 24bit
                        </p>
                        <p className='text-[13px] uppercase mb-2.5'>
                            31 tracks · 100 minutes
                        </p>

                        {/* Right side items */}
                        <div className='absolute right-4 top-0 text-right'>
                            <div className='uppercase w-[100px] text-[11px]'>
                                <div className='block text-right'>
                                    <div className='text-blue-600/100 text-[20px] mr-[5px]'>$34.98</div>
                                    {/* Global button styling in first div */}
                                <button className='bg-rose-600 h-[32px] border-solid rounded px-1.5'>ADD TO CART</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Track listings block*/}
            <div className='overflow-x-hidden min-h-[400px] pt-0 px-0 pb-[160px]'>
                <div className='mt-1'>
                    {/* Beginning of header*/}
                    <>
                        <ul className='list-none m-0 py-0 px-[35px] h-[47px] relative'>
                            <li className='box-border'>
                                <div className='flex justify-between items-center py-0 px-[15px]'>
                                    {/* Inner details of block*/}
                                    <div className='flex justify-between box-border items-center self-stretch w-full min-w-0 min-h-[50px] p-0 relative '>
                                        <div className='w-full text-[12px] min-w-[35px] max-w-[35px] text-left ml-0  self-center shrink text-lg'>#</div>
                                        <div className='w-full text-[12px] pr-[10px] text-left whitespace-nowrap overflow-hidden text-ellipsis text-lg'>TITLE</div>
                                        <div className='w-full text-[12px] min-w-[200px] max-w-[200px] text-left overflow-hidden text-ellipsis whitespace-nowrap pr-[10px] text-lg'>ARTIST</div>
                                        <div className='w-fill text-[13px] min-w-[100px] max-w-[100px] text-left ml-[120px] shrink text-lg'>QUALITY</div>
                                        <div className='w-fill text-[13px] min-w-[50px] max-w-[50px] text-left shrink text-lg'>LENGTH</div>
                                        <div className='min-w-[50px] max-w-[50px]'></div>
                                        <div className='min-w-[30px] max-w-[30px]'></div>

                                    </div>

                                </div>
                            </li>
                        </ul>
                    </>

                    {/* Beginning of tracks listing*/}
                    <>
                    {albums && (albums.tracks && albums.tracks.trackTitles.map((title: string, index: number) => (
                        <TracksListing number={index + 1} title={title} artist={albums.artist} length={albums.tracks.trackLengths[index]} />
                        ))
                    )}
                    </>

                </div>
            </div>

        </div>       
    )
}

export default AlbumDetails;