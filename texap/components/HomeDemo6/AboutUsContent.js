import React from 'react'
import Link from 'next/link'
import { AnimationOnScroll }from 'react-animation-on-scroll'

const AboutUsContent = ({ aboutUs }) => {
    return (
        <>
            {aboutUs && (
                <div className="about-area pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">
                                        {aboutUs.subTitle}
                                    </span>
                                    <h2>{aboutUs.title}</h2>
                                    <p>{aboutUs.longText}</p>

                                    {aboutUs.features.map(featureList => (
                                        <div className="features-text" key={featureList.id}>
                                            <h6>{featureList.title}</h6>
                                            <p>{featureList.longText}</p>
                                        </div>
                                    ))}
    
                                    <div className="btn-box">
                                        <Link href={aboutUs.btnOneUrl}>
                                            <a className="default-btn">
                                                {aboutUs.btnOneText}
                                            </a>
                                        </Link>
                                        <Link href={aboutUs.btnTwoUrl}>
                                            <a className="link-btn">
                                                {aboutUs.btnTwoText}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <AnimationOnScroll animateIn='fadeInUp'>
                                        <img 
                                            src={aboutUs.image.url} 
                                            alt={aboutUs.image.alternativeText} 
                                        />
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutUsContent;