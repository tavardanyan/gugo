import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import TrustedPartners from '@/components/HomeDemo1/TrustedPartners'

const MainBanner = ({ banner, partners }) => {
    return (
        <>
            {banner && (
                <div className="main-banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="main-banner-content">
                                    <div className="content">
                                        <span className="sub-title">{banner.infoText}</span>
                                        <h1>{banner.heading}</h1>
                                        <Link href={banner.btnUrl}>
                                            <a className="default-btn">{banner.btnText}</a>
                                        </Link>
                                    </div>
                                    {/* Trusted Partners Component */}
                                    <TrustedPartners partners={partners} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <ScrollAnimation animateIn='fadeInUp' duration={3} animateOnce={true}>
                                    <div className="main-banner-image">
                                        <img src={banner.image.url} alt={banner.image.alternativeText} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    {/* Banner Images */}
                    <div className="shape-overlay"></div>
                    <div className="banner-shape1">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                    <div className="banner-shape2">
                        <img src="/images/shape/shape7.png" alt="image" />
                    </div>
                    <div className="banner-shape3">
                        <img src="/images/shape/shape2.png" alt="image" />
                    </div>
                    <div className="banner-shape4">
                        <img src="/images/shape/shape10.png" alt="image" />
                    </div>
                    <div className="banner-shape5">
                        <img src="/images/shape/shape11.png" alt="image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner;