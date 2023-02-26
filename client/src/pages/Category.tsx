import AlbumCard from "../components/AlbumCard";
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react";


const Category = () => {

    const [albums, setAlbums] = useState<AxiosResponse | null | any | void>(null);

    useEffect(() => {

        const fetchAlbums = async () => {
            const albumData = await axios.get("http://localhost:8080/api/v1/album");
            console.log(albumData)
            setAlbums(albumData);
        }

        fetchAlbums();

    }, [])

    //const albumsToDisplay: any = albums?.albums ?? [];


    return(
        <div className="flex flex-col ">

            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-5 mb-10">
                <h2 className="font-bold text-2xl text-white text-left">NEW TITLES IN THIS CATEGORY</h2>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {albums && albums?.data.map((album: any) => (
                    <AlbumCard 
                        key={album.album_id}
                        album_id={album.album_id} 
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

export default Category;