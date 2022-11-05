import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Navigation
} from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const AppScreenshotsStyle2 = ({ appScreens }) => {
    return (
        <>
            {appScreens && (
                <div className="screenshots-area pb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {appScreens.subTitle}
                            </span>
                            <h2>
                                {appScreens.title}
                            </h2>
                        </div>

                        <Swiper 
                            loop={true}
                            effect={'coverflow'} 
                            grabCursor={true} 
                            centeredSlides={true} 
                            parallax={true}
                            slidesPerView={'auto'} 
                            navigation={true}
                            coverflowEffect={{
                                "rotate": 50,
                                "stretch": 0,
                                "depth": 100,
                                "modifier": 1,
                                "slideShadows": true,
                            }} 
                            pagination={false} 
                            className="mySwiper screenshots-swiper-slides"
                        >
                            {appScreens.screenshots.map(screenshot => (
                                <SwiperSlide key={screenshot.id}>
                                    <img 
                                        src={screenshot.image.url} 
                                        alt={screenshot.image.alternativeText} 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    )
}

export default AppScreenshotsStyle2;