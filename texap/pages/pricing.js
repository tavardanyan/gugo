import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PricingPlanStyle1 from '@/components/PricingPlan/PricingPlanStyle1'
import PartnerStyle2 from '@/components/Common/PartnerStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import baseApiUrl from '@/utils/baseApiUrl'
 
const Pricing = ({
    logo,
    pageTitle,
    partners,
    downloadApp,
    pricingTable,
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
                    activePageText={pageTitle.activePageText}
                />
            )}

            <PartnerStyle2 partners={partners} />

            <PricingPlanStyle1 pricingTable={pricingTable} />

            <div className="pt-100">
                <AppDownloadStyle2 downloadApp={downloadApp} />
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
    const pageTitleRes = await fetch(`${baseApiUrl}/pricing-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partner-style-two`);
    const partnersData = await partnersRes.json();
 
    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();

    // Pricing Table API
    const pricingTableRes = await fetch(`${baseApiUrl}/pricing-table`);
    const pricingTableData = await pricingTableRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            pageTitle: pageTitleData,
            partners: partnersData,
            downloadApp: downloadAppData,
            pricingTable: pricingTableData,
            footer: footerData,
        },
    }
}

export default Pricing;