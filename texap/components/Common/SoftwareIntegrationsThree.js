import React from 'react';
import { AnimationOnScroll }from 'react-animation-on-scroll';
import ReactMarkdown from 'react-markdown'

const SoftwareIntegrationsThree = ({ softwareIntegrations }) => {
    return (
        <>
            {softwareIntegrations && (
                <div className="software-integrations-area ptb-100">
                    <div className="container">
                        <div className="software-integrations-inner bg-gradient-color">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="software-integrations-content white-color">
                                        <span className="sub-title">
                                            {softwareIntegrations.subTitle}
                                        </span>

                                        <h2>{softwareIntegrations.title}</h2>

                                        <ReactMarkdown>
                                            {softwareIntegrations.longDec}
                                        </ReactMarkdown>
 
                                        <a href={softwareIntegrations.btnUrl} className="default-btn">
                                            {softwareIntegrations.btnText}
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <AnimationOnScroll animateIn="fadeInUp">
                                        <div className="software-integrations-list">
                                            <img src="/images/shape/border.png" alt="border" />

                                            <ul>
                                                <li>
                                                    <img 
                                                        src={softwareIntegrations.softwareImg1.url} 
                                                        className="atlassian" 
                                                        alt={softwareIntegrations.softwareImg1.alternativeText} 
                                                    />
                                                </li>
                                                <li> 
                                                    <img 
                                                        src={softwareIntegrations.softwareImg2.url} 
                                                        className="skype" 
                                                        alt={softwareIntegrations.softwareImg2.alternativeText} 
                                                    />
                                                </li>
                                                <li>
                                                    <img 
                                                        src={softwareIntegrations.softwareImg3.url} 
                                                        className="gdrive" 
                                                        alt={softwareIntegrations.softwareImg3.alternativeText} 
                                                    />
                                                </li>
                                                <li>
                                                    <img 
                                                        src={softwareIntegrations.softwareImg4.url} 
                                                        className="slack" 
                                                        alt={softwareIntegrations.softwareImg4.alternativeText} 
                                                    />
                                                </li>
                                                <li>
                                                    <img 
                                                        src={softwareIntegrations.softwareImg5.url} 
                                                        className="jira" 
                                                        alt={softwareIntegrations.softwareImg5.alternativeText} 
                                                    />
                                                </li>
                                                <li>
                                                    <img 
                                                        src={softwareIntegrations.softwareImg6.url} 
                                                        className="frame" 
                                                        alt={softwareIntegrations.softwareImg6.alternativeText} 
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape8">
                        <img src="/images/shape/shape7.png" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default SoftwareIntegrationsThree;