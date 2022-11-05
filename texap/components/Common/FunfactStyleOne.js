import React from 'react'

const FunfactStyleOne = ({ funfact }) => {
    return (
        <>
            {funfact && (
                <div className="funfacts-area pb-75">
                    <div className="container">
                        <div className="row justify-content-center">  
                            {funfact.funfacts.map(funfactList => (
                                <div className="col-lg-3 col-sm-6 col-md-6" key={funfactList.id}>
                                    <div className={funfactList.BgClass}>
                                        <div className="icon">
                                            <i className={funfactList.icon}></i>
                                        </div>
                                        <p>{funfactList.title}</p>
                                        <h3>
                                            {funfactList.number}<span className="sign">{funfactList.sign}</span>
                                        </h3>
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

export default FunfactStyleOne;