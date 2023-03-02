import { useParams } from "react-router-dom"

import AlbumDetails from "../components/AlbumDetails"



const AlbumListing = () => {

    const { id } = useParams<{ id?: string }>(); 
    console.log(id)

    return (
        
        <AlbumDetails id={id ?? ""} />
    )
}

export default AlbumListing