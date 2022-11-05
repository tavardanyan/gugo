import React from 'react';

const KeyFeatures = ({ keyFeatures }) => {
    return (
        <>
            {keyFeatures && (
                <div className="features-area pt-100 pb-75">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {keyFeatures.subTitle}
                            </span>
                            <h2>{keyFeatures.title}</h2>
                        </div>
                        <div className="row justify-content-center">
                            {keyFeatures.lists.slice(0,6).map(list => (
                                <div className="col-lg-4 col-6 col-md-6 xsw-100" key={list.id}>
                                    <div className="features-item">
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
            )}
        </>
    )
}

export default KeyFeatures;