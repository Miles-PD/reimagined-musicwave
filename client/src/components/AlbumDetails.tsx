import What from '../assets/whats.jpg'

const AlbumDetails = () => {
    return (
        <div className="flex flex-row relative p-[15px] min-h-100">
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
                    <div className='absolute right-0 top-0 text-right'>
                        <div className='uppercase w-[100px] text-[11px]'>
                            <div className='block'>
                                <div className='text-blue-600/100 text-[20px] mr-[5px]'>$34.98</div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AlbumDetails