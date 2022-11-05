import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import ReactMarkdown from 'react-markdown'
import baseApiUrl from '@/utils/baseApiUrl'
 
const HowItWorks = ({
    logo,
    worksProcess,
    downloadApp,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {worksProcess && (
                <>
                    <PageBannerStyle1 
                        pageTitle={worksProcess.title}
                        homePageUrl={worksProcess.homePageUrl}
                        homePageText={worksProcess.homePageText}
                        activePageText={worksProcess.activePage}
                    />

                    <div className="how-it-works-area ptb-100">
                        <div className="container">
                            {worksProcess.Steps.map(step => (
                                <div className="how-it-works-content" key={step.id}>
                                    <div className="number">
                                        {step.stepNumber}
                                    </div>
                                    
                                    <div className="row m-0">
                                        <div className="col-lg-3 col-md-12 p-0">
                                            <div className="box">
                                                <h3>{step.title}</h3>
                                                <span>{step.subTitle}</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-9 col-md-12 p-0">
                                            <div className="content">
                                                <ReactMarkdown>
                                                    {step.longDec}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <AppDownloadStyle2 downloadApp={downloadApp} />
 
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Works Process API
    const worksProcessRes = await fetch(`${baseApiUrl}/how-it-works-page-title`);
    const worksProcessData = await worksProcessRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            worksProcess: worksProcessData,
            downloadApp: downloadAppData,
            footer: footerData,
        },
    }
}

export default HowItWorks;