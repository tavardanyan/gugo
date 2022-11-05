import React from 'react';
import Link from 'next/link';

const MainBanner = ({ banner }) => {
    return (
        <>
            {banner && (
                <div className="main-banner">
                    <div className="container">
                        <div className="content">
                            <span className="sub-title">
                                {banner.subTitle}
                            </span>
                            
                            <h1>
                                {banner.title}
                            </h1>

                            <Link href={banner.btnUrl}>
                                <a className="default-btn">
                                    {banner.btnText}
                                </a>
                            </Link>

                            <img 
                                src={banner.images.url} 
                                alt={banner.images.alternativeText} 
                            />
                        </div>
                    </div>
                
                    {/* Shape Images */}
                    <div className="banner-shape3">
                        <img src="/images/shape/shape2.png" alt="image" />
                    </div>
                    <div className="banner-shape8">
                        <img src="/images/shape/shape11.png" alt="image" />
                    </div>
                    <div className="banner-shape7">
                        <img src="/images/shape/shape11.png" alt="image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner;