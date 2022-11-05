import React from 'react';
import Link from 'next/link';

const KeyFeatures = ({ feature }) => {
    return (
        <>
            {feature && (
                <div className="features-area ptb-100 bg-F7F7FF">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {feature.subTitle}
                            </span>
                            <h2>{feature.title}</h2>
                        </div>

                        <div className="row justify-content-center">
                            {feature.lists.slice(0,6).map(list => (
                                <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6" key={list.id}>
                                    <div className="single-features-item">
                                        <div className={list.iconBgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                        <p>{list.shortDec}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                                <div className="view-more-box">
                                    <Link href={feature.btnUrl}>
                                        <a className="default-btn">{feature.btnText}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default KeyFeatures;