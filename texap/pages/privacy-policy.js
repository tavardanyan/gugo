import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'
 
const PrivacyPolicy = ({ logo, privacyPolicy, downloadApp, footer }) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {privacyPolicy && (
                <>
                    <PageBannerStyle1 
                        pageTitle={privacyPolicy.title}
                        homePageUrl={privacyPolicy.homeUrl}
                        homePageText={privacyPolicy.homeText}
                        activePageText={privacyPolicy.activePage}
                    />

                    <div className="privacy-policy-area ptb-100">
                        <div className="container">
                            <div className="privacy-policy-content">
                                <ReactMarkdown>
                                    {privacyPolicy.longDec}
                                </ReactMarkdown>
                            </div>
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

    // Privacy Policy API
    const privacyPolicyRes = await fetch(`${baseApiUrl}/privacy-policy`);
    const privacyPolicyData = await privacyPolicyRes.json();
    
    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();
    
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            privacyPolicy: privacyPolicyData,
            footer: footerData,
        },
    }
}

export default PrivacyPolicy;