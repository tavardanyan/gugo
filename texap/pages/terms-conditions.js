import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'
 
const TermsConditions = ({ logo, terms, downloadApp, footer }) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {terms && (
                <>
                    <PageBannerStyle1 
                        pageTitle={terms.title}
                        homePageUrl={terms.homeUrl}
                        homePageText={terms.homeText}
                        activePageText={terms.activePage}
                    />

                    <div className="terms-conditions-area ptb-100">
                        <div className="container">
                            <div className="terms-conditions-content">
                                <ReactMarkdown>
                                    {terms.longText}
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

    // terms API
    const termsRes = await fetch(`${baseApiUrl}/terms-and-conditions`);
    const termsData = await termsRes.json();
    
    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();
    
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            terms: termsData,
            footer: footerData,
        },
    }
}

export default TermsConditions;