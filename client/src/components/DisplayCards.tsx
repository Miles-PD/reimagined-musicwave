import AlbumCard from "../components/AlbumCard";
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react";


const DisplayCards = () => {

    const numToDisplay = 6;

    const [albums, setAlbums] = useState<AxiosResponse | null | any | void>(null);

    useEffect(() => {

        const fetchAlbums = async () => {
            const albumData = await axios.get("http://localhost:8080/api/v1/album");
            setAlbums(albumData);
        }

        fetchAlbums();

    }, [])

    //const albumsToDisplay: any = albums?.albums ?? [];


    return(
        <div className="flex flex-col">

            <div className="flex flex-wrap sm:justify-start justify-center gap-[14px]">
                {albums && albums?.data.slice(0, numToDisplay).map((album: any) => (
                    <AlbumCard 
                        key={album._id}
                        _id={album._id}
                        title={album.title} 
                        artist={album.artist}
                        label={album.label}
                        genre={album.genre} 
                        khz={album.khz} 
                        bitrate={album.bitrate}
                        numTracks={album.numTracks}
                        runtime={album.runtime}
                         />
                ))}
            </div>

        </div>
    )
}

export default DisplayCards;