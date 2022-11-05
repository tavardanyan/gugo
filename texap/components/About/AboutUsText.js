import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactMarkdown from 'react-markdown'

const AboutUsText = ({ aboutUsText }) => {
    return (
        <>
            {aboutUsText && (
                <div className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">
                                        {aboutUsText.subTitle}
                                    </span>
                                    <h2>{aboutUsText.title}</h2>
                                    
                                    <div className="">
                                        <ReactMarkdown>
                                            {aboutUsText.longDec}
                                        </ReactMarkdown>
                                    </div>

                                    <div className="btn-box">
                                        <Link href={aboutUsText.btnOneUrl}>
                                            <a className="default-btn">
                                                {aboutUsText.btnOneText}
                                            </a>
                                        </Link>
                                        <Link href={aboutUsText.btnTwoUrl}>
                                            <a className="link-btn">
                                                {aboutUsText.btnTwoText}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <ScrollAnimation animateIn='fadeInUp'>
                                        <img 
                                            src={aboutUsText.image.url} 
                                            alt={aboutUsText.image.alternativeText} 
                                        />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutUsText;