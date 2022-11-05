import React from 'react';

const FreeTrialStyle1 = ({ freeTrialInfo }) => {
    return (
        <>
            {freeTrialInfo && (
                <div className="free-trial-area pb-100">
                    <div className="container">
                        <div className="free-trial-content">
                            <span className="sub-title">
                                {freeTrialInfo.subTitle}
                            </span>
                            <h2>
                                {freeTrialInfo.title}
                            </h2>

                            <form className="free-trial-form" onSubmit={e => e.preventDefault()}>
                                <input 
                                    type="text" 
                                    className="input-newsletter" 
                                    placeholder="Enter Your Email Address" 
                                    name="email" 
                                />
                                <button type="submit" className="default-btn">
                                    {freeTrialInfo.btnText}
                                </button>
                            </form>

                            {/* Shape Images */}
                            <div className="shape8">
                                <img src="/images/shape/shape7.png" alt="shape" />
                            </div>
                            <div className="shape9">
                                <img src="/images/shape/shape8.png" alt="shape" />
                            </div>

                            {/* Animation lines */}
                            <div className="lines">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FreeTrialStyle1;