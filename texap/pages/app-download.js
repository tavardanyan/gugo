import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
 
const AppDownload = ({
    logo,
    pageTitle,
    downloadApp,
    partners,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {pageTitle && (
                <PageBannerStyle1 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homeUrl}
                    homePageText={pageTitle.homeText}
                    activePageText={pageTitle.activePage}
                />
            )}

            <div className="ptb-100">
                <AppDownloadStyle1 downloadApp={downloadApp} />
            </div>
             
            <PartnerStyle3 partners={partners} />
 
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Page Title API
    const pageTitleRes = await fetch(`${baseApiUrl}/app-download-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app`);
    const downloadAppData = await downloadAppRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partner-style-two`);
    const partnersData = await partnersRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            pageTitle: pageTitleData,
            downloadApp: downloadAppData,
            partners: partnersData,
            footer: footerData,
        },
    }
}

export default AppDownload;