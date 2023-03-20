import { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BiSearchAlt } from 'react-icons/bi'

const Searchbar = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(`/search/${searchTerm}`)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search-field" className="sr-only">
                Seach here
            </label>
            <div className="flex flex-row justify-start items-center">
                <BiSearchAlt className="w-5 h-5 ml-4" />
                <input 
                    className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white"
                    name="search-field"
                    autoComplete="off"
                    id="search-field"
                    placeholder="Seach for albums, artists, labels, etc."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    >
                </input>
            </div>
        </form>
    )
}

export default Searchbar;