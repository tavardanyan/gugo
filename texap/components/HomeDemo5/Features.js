import React from 'react';

const Features = ({ feature }) => {
    return (
        <>
            {feature && (
                <div className="features-area pb-100">
                    <div className="container">
                        <div className="features-inner">
                            <div className="row justify-content-center">
                                {feature.lists.slice(0,4).map(list => (
                                    <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3 col-6" key={list.id}>
                                        <div className="features-box">
                                            <div className={list.iconBgClass}>
                                                <i className={list.icon}></i>
                                            </div>
                                            <h3>{list.title}</h3>
                                        </div>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Features;