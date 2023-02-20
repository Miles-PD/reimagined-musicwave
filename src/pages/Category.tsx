import AlbumCard from "../components/AlbumCard";


const Category = () => {

    return(
        <div className="flex flex-col ">

            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-5 mb-10">
                <h2 className="font-bold text-2xl text-white text-left">NEW TITLES IN THIS CATEGORY</h2>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1,2,3,4,5,6,7,8,9,10].map((album, i) => (
                    <AlbumCard />
                ))}
            </div>

        </div>
    )
}

export default Category;