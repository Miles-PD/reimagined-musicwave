import igloo from '../assets/igloo.png'

const Home = () => {

    return(
        <>
            <div className="flex flex-col px-[240px]">

                <div className='textbox w-full h-16 flex flex-row items-center '>
                    <h1 className='flex justify-start '>
                    Latest arrivals
                    </h1>

                </div>
                {/* Top album recc gfx */}
                <div className="relative">
                    <div className="flex flex-row w-full h-96 bg-red-400">
                        <div className="float-left w-2/4 bg-purple-400">
                            <img src={igloo} className="h-full w-full object-none" />
                        </div>
                        <div className="green-overlay absolute bottom-0 left-0 w-2/4 h-2/4 bg-black opacity-50"></div>
                        <div className="rightMostBox float-right w-2/4 bg-blue-300">
                            <div className="containerForFour">
                                <div className="w-2/4 h-[192px] bg-green-200">
                                    gfgfgf
                                </div>
                                <div className="w-2/4 h-[192px] bg-green-200">
                                    gfgfgfss
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;