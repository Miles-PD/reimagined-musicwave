import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react";

import AlbumDetails from "../components/AlbumDetails"
import AlbumCard from "../components/AlbumCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

import 'swiper/css';
import 'swiper/css/free-mode';



const AlbumListing = () => {

  
    const [otherAlbums, setOtherAlbums] = useState<AxiosResponse | null | any | void>([]);

    const { id } = useParams<{ id?: string }>(); 
    //console.log(id)

    useEffect(() => {

        const fetchOtherAlbums = async () => {
            try {
                const others = await axios.get(`http://localhost:8080/api/v1/artist/more/${id}`);
                
                setOtherAlbums(others);
            } catch (error) {
                console.log("Error finding album details:", error);
              }
        }

        fetchOtherAlbums();
    }, [])

    return (
        <>
            <AlbumDetails id={id ?? ""} />

            <div className="w-full flex flex-col py-[15px] px-[50px]">
                <Swiper
                    spaceBetween={25}
                    slidesPerView="auto"
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4"
                >
                    {otherAlbums && otherAlbums?.data?.map((album: any, i: number) => (
                        <SwiperSlide key={i} style={{ width: 'auto', height: 'auto'}} className="shadow-lg animate-slideright">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default AlbumListing