import React from 'react';
import Link from 'next/link';
const KeyFeatures = ({ keyFeatures }) => {
    return (
        <>
            {keyFeatures && (
                <div className="features-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {keyFeatures.subTitle}
                            </span>
                            <h2>{keyFeatures.title}</h2>
                        </div>

                        <div className="row justify-content-center">
                            {keyFeatures.lists.slice(0,6).map(list => (
                                <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6" key={list.id}>
                                    <div className="single-features-item without-hover">
                                        <div className={list.iconBgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                        <p>{list.shortDec}</p>
                                    </div>
                                </div> 
                            ))}

                            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                                <div className="text-center">
                                    <Link href={keyFeatures.btnUrl}>
                                        <a className="default-btn">{keyFeatures.btnText}</a>
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