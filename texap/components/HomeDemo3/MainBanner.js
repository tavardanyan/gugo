import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = ({ banner }) => {
    return (
        <>
            {banner && (
                <div className="banner-wrapper-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="banner-wrapper-content">
                                    <span className="sub-title">
                                        {banner.subTitle}
                                    </span>
                                    <h1>
                                        {banner.title}
                                    </h1>
                                    <p>
                                        {banner.shortText}
                                    </p>
                                    <Link href={banner.btnUrl}>
                                        <a className="default-btn">
                                            {banner.btnText}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="banner-wrapper-image">
                                    <div className="banner-img">
                                        <img 
                                            src={banner.image.url} 
                                            alt={banner.image.alternativeText} 
                                        />
                                    </div>
                                    <div className="banner-img">
                                        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} initiallyVisible={true}>
                                            <img 
                                                src={banner.imageTwo.url} 
                                                alt={banner.imageTwo.alternativeText} 
                                            />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="shape13">
                        <img src="/images/shape/shape15.png" alt="shape" />
                    </div>
                    <div className="shape14">
                        <img src="/images/shape/shape17.png" alt="shape" />
                    </div>
                    <div className="shape15">
                        <img src="/images/shape/shape18.png" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner;