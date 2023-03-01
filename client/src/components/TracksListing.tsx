
interface TrackProps {
    number: Number,
    title: String,
    artist: String,
    length: String
}

const TracksListing: React.FC<TrackProps> = ({ number, title, artist, length}) => {
    return (
        <>
            <ul className='list-none m-0 py-0 px-[35px] relative'>
                <li className='box-border'>
                     <div className='flex justify-between items-center py-0 px-[15px]'>
                        {/* Inner details of block*/}
                            <div className='w-full flex justify-between box-border items-center rounded-lg hover:bg-[#4c426e] cursor-pointer self-stretch min-w-0 h-[50px] p-0 mb-2 relative '>
                                <div className='w-full text-[12px] min-w-[35px] max-w-[35px] text-left ml-0  self-center shrink text-lg text-[#989898]'><>{number}</></div>
                                <div className='w-full text-[12px] pr-[10px] text-left whitespace-nowrap overflow-hidden text-ellipsis shrink text-lg'>{title}</div>
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