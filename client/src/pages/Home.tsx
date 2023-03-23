import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


import igloo from '../assets/igloo.png'
import test from '../assets/test2.png'
import aphex from '../assets/aphex.png'

const Home = () => {

    return(
        <>
            <div className="flex flex-col px-[240px]">

                <section className="flex flex-row">
                    <div className='w-2/4 h-16 flex flex-row items-center '>
                        <h1 className='flex justify-start '>
                        Latest arrivals
                        </h1>

                    </div>

                    <div className='w-2/4 h-16 pl-2 flex flex-row items-center '>
                        <h1 className='flex justify-start '>
                        Trending artists
                        </h1>

                    </div>
                </section>

                {/* Top album recc gfx */}
                <div className="flex flex-row w-full relative object-contain overflow-hidden select-none cursor-pointer">
                    <div className="flex flex-row w-2/4 h-96 bg-red-400">
                        <div className="w-full">
                            <Swiper 
                                className="float-left w-full overflow-hidden"
                                navigation={true} 
                                modules={[Navigation, EffectFade, Autoplay]}
                                slidesPerView={1}
                                autoplay={{ delay: 5000 }}
                                loop
                                effect="fade"
                                width={696} // set a fixed width
                                height={384} // set a fixed height
                                >
                                <SwiperSlide key={0} className="overflow-hidden">
                                    <img src={igloo} className="h-full w-full object-none" />
                                </SwiperSlide>
                                <SwiperSlide key={1}>
                                    <img src={test} className="h-full w-full object-none" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <section className='opacityOverlay group group-hover:relative z-10'>
                            <div className="absolute left-0 w-2/4 h-full group-hover:block z-2">
                                <div className="hidden absolute bottom-0 left-0 w-full h-40 bg-black backdrop-blur-sm animate-slideup_faster opacity-75 group-hover:block" />
                            </div>
                                <div className='opacity-0 px-3 pb-3 pt-10 absolute bottom-0 left-0 w-2/4 h-2/4 overflow-hidden group-hover:opacity-100 ease-in-out'>
                                    <p className='text-white pt-1 text-2xl'>
                                        A strong debut from Iglooghost
                                    </p>
                                    <p className='text-sm pt-2 pr-10'>
                                    The debut album from Iglooghost 
                                    </p>
                                </div>
                        </section>
                    </div>
                    
                    <div className="grid grid-cols-2 grid-rows-2 w-2/4 h-96">
                        <div className="relative pl-2 pb-2">
                            <img src={aphex} className="object-cover w-full h-full" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                                <div className="inline-block box-border w-auto h-auto absolute bottom-4 left-5 text-left z-10">
                                    <span className="text-gray-200 text-xl font-bold select-none">
                                        Aphex Twin
                                    </span>
                                </div>
                        </div>
                        <div className="relative pl-2 pb-2">
                            <img src={aphex} className="object-cover w-full h-full" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                        </div>
                        <div className="relative pl-2">
                            <img src={aphex} className="object-cover w-full h-full" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                        </div>
                        <div className="relative pl-2">
                            <img src={aphex} className="object-cover w-full h-full" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Home;