import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const BestAppEver = ({ bestApp }) => {
    return (
        <>
            {bestApp && (
                <div className="features-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-content">
                                    <h2>{bestApp.heading}</h2>
                                    <p>{bestApp.shortDec}</p>

                                    <ul className="features-list" >
                                        {bestApp.feature.map(featureList => (
                                            <li key={featureList.id}>
                                                <div className={featureList.iconBgClass}>
                                                    <i className={featureList.icon}></i>
                                                </div>
                                                <h3>{featureList.title}</h3>
                                                <p>{featureList.shortDec}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="btn-box">
                                        <Link href={bestApp.btnOneUrl}>
                                            <a className="default-btn">{bestApp.btnOneText}</a>
                                        </Link>
                                        <Link href={bestApp.btnTwoUrl}>
                                            <a className="link-btn">{bestApp.btnTwoText}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-image text-center">
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <img src={bestApp.image.url} alt={bestApp.image.alternativeText} />
                                    </ScrollAnimation>

                                    <div className="shape">
                                        <img className="shape3" src="/images/shape/shape2.png" alt="shape" />
                                        <img className="shape4" src="/images/shape/shape3.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-shape1">
                        <img src="/images/shape/bg-shape1.png" alt="bg-shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default BestAppEver;