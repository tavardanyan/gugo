import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1'
import AppScreenshotsStyle3 from '@/components/AppScreenshots/AppScreenshotsStyle3'
import AppScreenshotsStyle5 from '@/components/AppScreenshots/AppScreenshotsStyle5'
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Screenshots = ({
    logo,
    pageTitle,
    appScreenshots,
    downloadApp,
    softwareIntegrations,
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

            <AppScreenshotsStyle1 appScreenshots={appScreenshots} />

            <SoftwareIntegrations softwareIntegrations={softwareIntegrations} />
 
            <AppScreenshotsStyle3 appScreenshots={appScreenshots} />

            <div className="pt-100">
                <AppScreenshotsStyle5 appScreenshots={appScreenshots} />
            </div>
  
            <div className="ptb-100">
                <AppDownloadStyle1 downloadApp={downloadApp}  />
            </div>
 
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Page Title API
    const pageTitleRes = await fetch(`${baseApiUrl}/screenshots-page-title`);
    const pageTitleData = await pageTitleRes.json();

  
    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app`);
    const downloadAppData = await downloadAppRes.json();

    // App Screenshots API
    const appScreenshotsRes = await fetch(`${baseApiUrl}/app-screenshots`);
    const appScreenshotsData = await appScreenshotsRes.json();

    // Software Integrations API
    const softwareIntegrationsRes = await fetch(`${baseApiUrl}/software-integrations`);
    const softwareIntegrationsData = await softwareIntegrationsRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            pageTitle: pageTitleData,
            appScreenshots: appScreenshotsData,
            downloadApp: downloadAppData,
            softwareIntegrations: softwareIntegrationsData,
            footer: footerData,
        },
    }
}

export default Screenshots;