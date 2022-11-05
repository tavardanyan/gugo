import React from 'react';

const Features = ({ feature }) => {
    return (
        <>
            {feature && (
                <div className="features-area pt-100 pb-75">
                    <div className="container">
                        <div className="row justify-content-center">
                            {feature.lists.slice(0,4).map(list => (
                                <div className="col-xl-3 col-lg-3 col-6 col-md-6 xsw-100" key={list.id}>
                                    <div className="features-box left">
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

export default Features;