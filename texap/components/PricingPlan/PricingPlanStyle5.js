import React from 'react';
import Link from 'next/link'

const PricingPlanStyle5 = ({ pricingTable }) => {
    return (
        <>
            {pricingTable && (
                <div className="pricing-area gradient-color pt-100 pb-75">
                    <div className="container">
                        <div className="section-title color-white">
                            <span className="sub-title">
                                {pricingTable.subTitle}
                            </span>
                            <h2>{pricingTable.title}</h2>
                        </div>

                        <div className="row align-items-center justify-content-center">
                            {pricingTable.pricingCard.map(infoText => (
                                <div className="col-lg-4 col-md-6 col-sm-6 popular-tag" key={infoText.id}>
                                    <div className="single-pricing-box">
                                        <div className="title">
                                            <h3>{infoText.title}</h3>
                                            <p>{infoText.subTitle}</p>
                                        </div>

                                        <span className="popular">
                                            {infoText.tag}
                                        </span>

                                        <div className="price">
                                            {infoText.price} <span>{infoText.duration}</span>
                                        </div>

                                        <Link href={infoText.btnUrl}>
                                            <a className="default-btn">{infoText.btnText}</a>
                                        </Link>

                                        <ul className="features-list">
                                            {infoText.list.map(listInfo => (
                                                <li key={listInfo.id}>
                                                    <i className={listInfo.icon}></i> 
                                                    {listInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            
                    {/* Shape Images */}
                    <div className="shape7">
                        <img src="/images/shape/shape6.png" alt="shape" />
                    </div>
                    <div className="shape8">
                        <img src="/images/shape/shape7.png" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default PricingPlanStyle5;