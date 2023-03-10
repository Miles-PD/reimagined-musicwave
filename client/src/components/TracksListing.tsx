import { useEffect, useState } from 'react'
import axios from 'axios'
import PlayOrPause from './PlayOrPause'
import { FaPlay } from 'react-icons/fa'
import Player from './Player'



interface TrackProps {
    number: number,
    title: string,
    artist: string,
    length: string
}


const TracksListing: React.FC<TrackProps> = ({ number, title, artist, length}) => {

    // const [hovered, setHovered] = useState(false);
    // const [selectedTrack, setSelectedTrack] = useState<{ artist: string, title: string } | null>(null)
    const [youtubeURL, setYoutubeURL] = useState<string | null>(null);
    const [activeURL, setActiveURL] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handlePlayClicked = (youtubeURL: string, songDuration: string) => {
        

    }

    const handlePlay = () => {
        
        getSongId(title, artist)
        setIsPlaying(true)
        console.log(youtubeURL)

        console.log('clicked')
      };

      const getSongId = async (title: string, artist: string) => { 
        try {
            const encodedTitle = encodeURI(title.toLowerCase());
            const encodedArtist = encodeURI(artist.toLowerCase());
            //const songURL = await axios.get(`http://localhost:8080/api/v1/songdata/req_song/${encodedTitle}%20${encodedArtist}`);
        
            //setYoutubeURL(songURL?.data?.id)
            setYoutubeURL('eA8zugz6G9c')
            
        } catch (error) {
            console.log("Error finding album details:", error);
          }
    }

    

    



    return (
        <>
            <ul className='list-none m-0 py-0 px-[35px] relative'>
                <li className='box-border'>
                     <div className='flex justify-between items-center py-0 px-[15px]'>
                        {/* Inner details of block*/}
                            <div className={`group w-full flex justify-between box-border items-center rounded-lg hover:bg-[#4c426e] cursor-pointer self-stretch min-w-0 h-[50px] p-0 mb-2 relative`} >
                                <div className={`w-full text-[12px] min-w-[35px] max-w-[35px] text-left ml-2 self-center shrink text-lg text-[#989898] relative`} >
                                    <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all ease-in-out duration-300`} >
                                        <span className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all ease-in-out duration-300 opacity-100 group-hover:opacity-0`} >
                                            {number}
                                        </span>
                                        <span className={`absolute bottom-0 left-0 w-full h-full flex items-center justify-center transition-all ease-in-out duration-300 opacity-0 group-hover:opacity-100`} >
                                            {/* {<FaPlay onClick={() => getSongId(title, artist)} />} */}
                                            <PlayOrPause handlePlay={handlePlay} isPlaying={isPlaying} />
                                            {isPlaying && <Player 
                                                            videoId={youtubeURL && youtubeURL}
                                                            isPlaying={isPlaying}
                                                            songDuration={length}
                                                             />}
                                        </span>
                                    </div>
                                </div>
                                <div className='w-full text-[12px] pr-[10px] pl-[13px] text-left whitespace-nowrap overflow-hidden text-ellipsis shrink text-lg'>{title}</div>
                                <div className='w-full text-[12px] min-w-[200px] max-w-[200px] text-left overflow-hidden text-ellipsis whitespace-nowrap pr-[10px] shrink text-lg'>{artist}</div>
                                <div className='w-fill text-[13px] min-w-[100px] max-w-[100px] text-left ml-[120px] shrink text-sm'>48kHz · 24bit</div>
                                <div className='w-fill text-[13px] min-w-[50px] max-w-[50px] text-left shrink text-lg'>{length}</div>
                                <div className='min-w-[50px] max-w-[50px] shrink'></div>
                                <div className='min-w-[30px] max-w-[30px] shrink'></div>
                            </div>
                        </div>
                </li>
            </ul>           
        </>
    )
}

export default TracksListing;