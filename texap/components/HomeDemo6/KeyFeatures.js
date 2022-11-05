import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'

const KeyFeatures = ({ keyFeatures }) => {
    return (
        <>
            {keyFeatures && (
                <div className="features-area pb-75">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-content">
                                    <span className="sub-title">
                                        {keyFeatures.subTitle}
                                    </span>

                                    <h2>
                                        {keyFeatures.title}
                                    </h2>

                                    <ReactMarkdown>
                                        {keyFeatures.longDec}
                                    </ReactMarkdown>

                                    <div className="btn-box">
                                        <Link href={keyFeatures.btnOneUrl}>
                                            <a className="default-btn">{keyFeatures.btnOneText}</a>
                                        </Link>
                                        <Link href={keyFeatures.btnTwoUrl}>
                                            <a className="link-btn">{keyFeatures.btnTwoText}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12">
                                <div className="list-of-features">
                                    <div className="row justify-content-center">
                                        {keyFeatures.features.slice(0,4).map(list => (
                                            <div className="col-lg-6 col-6 col-md-6 xsw-100" key={list.id}>
                                                <div className="features-item with-border">
                                                    <div className={list.iconBgClass}>
                                                        <i className={list.icon}></i>
                                                    </div>
                                                    <h3>{list.title}</h3>
                                                    <p>{list.shortDec}</p>
                                                </div>
                                            </div> 
                                        ))}
                                    </div>
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