import React from 'react'
import Link from 'next/link'
import { AnimationOnScroll }from 'react-animation-on-scroll'

const AboutUsArea = ({ bestApp }) => {
    return (
        <>  
            {bestApp && (
                <div className="about-area pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">
                                        {bestApp.subTitle}
                                    </span>
                                    <h2>{bestApp.title}</h2>
                                    <p>{bestApp.longText}</p>

                                    {bestApp.features.map(featureList => (
                                        <div className="features-text" key={featureList.id}>
                                            <h6>{featureList.title}</h6>
                                            <p>{featureList.longText}</p>
                                        </div> 
                                    ))}

                                    <div className="btn-box">
                                        <Link href={bestApp.btnOneUrl}>
                                            <a className="default-btn">
                                                {bestApp.btnOneText}
                                            </a>
                                        </Link>
                                        <Link href={bestApp.btnTwoUrl}>
                                            <a className="link-btn">
                                                {bestApp.btnTwoText}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <AnimationOnScroll animateIn='fadeInUp'>
                                        <img 
                                            src={bestApp.image.url} 
                                            alt={bestApp.image.alternativeText} 
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

export default AboutUsArea;