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
                        <div className="absolute bottom-0 left-0 w-2/4 h-2/4 bg-black opacity-75"></div>
                            <div className='p-3 absolute bottom-0 left-0 w-2/4 h-2/4 overflow-hidden'>
                                <p className='text-white pt-1 text-2xl'>
                                    A strong debut from Iglooghost
                                </p>
                                <p className='text-sm pt-2'>
                                The debut album from Iglooghost from 2017 goes even further down that rabbit hole of wild genre melee with EDM, juke, J-Pop, chiptune and much more all counted as weapons in the Irish producer’s arsenal. The voracious postmodernism of Neō Wax Bloom would mean nothing, however, if Iglooghost wasn’t an immaculate curator as well as creator. The attention to detail of tracks like ‘White Gum’ and ‘Teal Yomi/Olivine’ recalls the legendary SOPHIE and labelmate Daedalus - bursting at the seams, every idea still manages to find its own triumphant space.
                                </p>
                            </div>
                        
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