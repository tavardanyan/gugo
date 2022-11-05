import React from 'react'

const OurStats = ({ stats }) => {
    return (
        <>
            {stats && (
                <div className="stats-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {stats.subTitle}
                            </span>
                            <h2>{stats.title}</h2>
                        </div>
                        <div className="stats-map text-center">
                            <img src={stats.image.url} alt={stats.image.alternativeText} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OurStats;