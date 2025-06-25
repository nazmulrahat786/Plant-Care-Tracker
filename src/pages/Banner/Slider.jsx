  // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
  
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  
ff
const Slider = () => {
    return (
        <div className='w-[94%] md:max-w-6xl mx-auto my-3 md:my-6 mb-12 md:mb-16'>
            <Swiper    
                // install Swiper modules 
                modules={[Navigation, Pagination, Scrollbar, A11y]} 
                spaceBetween={20} 
                slidesPerView={1}fd
                navigation      
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)} 
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='relative w-full h-[80vh] rounded-xl overflow-hidden'>
                        <img className='absolute inset-0 w-full h-full object-cover' src="https://i.ibb.co/KFYGf8L/Ceramics-and-Pottery-30.jpg" alt="" />
                        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-70 to-transparent'></div>
                    </div>

                    <div className='absolute top-[10%] md:top-[25%] px-8 md:px-16 space-y-6'>
                        <Slide>dd
                            <h1 className='text-3xl md:text-5xl font-bold text-cyan-400 md:h-2/3 lg:w-1/2'>Pottery is such a fascinating art!</h1>
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <p className='text-white md:w-[70%]'>The process of shaping clay into vessels or sculptures and then firing them to harden them is both meditative and rewarding. Whether you are throwing clay on a wheel or hand-building intricate designs, there is something incredibly satisfying about working with your hands to create something functional or beautiful, or both. Plus, the variety of techniques and styles across different cultures and time periods adds even more depth to the art form.</p>
                        </Fade>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[80vh] rounded-xl overflow-hidden'>
                        <img className='absolute inset-0 w-full h-full object-cover' src="https://i.ibb.co/bQ9hVTd/Ceramics-and-Pottery-13.jpg" alt="" />
                        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-70 to-transparent'></div>
                    </div>

                    <div className='absolute top-[10%] md:top-[25%] px-8 md:px-16 space-y-6'>
                        <Slide>
                            <h1 className='text-3xl md:text-5xl font-bold text-cyan-400 md:h-2/3 lg:w-1/2'>Ceramics and pottery are fascinating subjects!</h1>
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <p className='text-white md:w-[70%]'>Ceramics refer to objects made from clay that are shaped and then hardened through firing at high temperatures. Pottery specifically refers to ceramic ware made by potters, typically functional objects like bowls, plates, vases, and pots. Whether you are throwing clay on a wheel or hand-building intricate designs, there are something incredibly satisfying about working with your hands to create something functional or beautiful, or both. </p>
                        </Fade>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[80vh] rounded-xl overflow-hidden'>
                        <img className='absolute inset-0 w-full h-full object-cover' src="https://i.ibb.co/Rc0NJvQ/Ceramics-and-Pottery-36.jpg" alt="" />
                        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-70 to-transparent'></div>
                    </div>

                    <div className='absolute top-[10%] md:top-[25%] px-8 md:px-16 space-y-6'>
                        <Slide>
                            <h1 className='text-3xl md:text-5xl font-bold text-cyan-400 md:h-2/3 lg:w-1/2'>Traditional clay made pots really fascinating!</h1>
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <p className='text-white md:w-[70%]'>Traditional ceramics, ceramic materials that are derived from common, naturally occurring raw materials such as clay minerals and quartz sand. Through industrial processes that have been practiced in some form for centuries, these materials are made into such familiar products as china tableware, clay brick and tile, industrial abrasives and refractory linings, and portland cement.</p>
                        </Fade>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
