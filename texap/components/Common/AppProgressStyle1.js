import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const AppProgressStyle1 = ({ appProgress }) => {
    return (
        <>
            {appProgress && (
                <div className="app-progress-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress-image text-center">
                                    <img 
                                        src={appProgress.image.url} 
                                        alt={appProgress.image.alternativeText} 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress-content">
                                    <span className="sub-title">
                                        {appProgress.subTitle}
                                    </span>

                                    <h2>{appProgress.title}</h2>

                                    <ReactMarkdown>
                                        {appProgress.descriptionText}
                                    </ReactMarkdown>

                                    <Link href={appProgress.btnUrl}>
                                        <a className="default-btn">{appProgress.btnText}</a>
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

export default AppProgressStyle1;