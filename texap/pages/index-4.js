import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import MainBanner from '@/components/HomeDemo4/MainBanner'
import PartnerStyle2 from '@/components/Common/PartnerStyle2'
import IntroVideo from '@/components/HomeDemo4/IntroVideo'
import Features from '@/components/HomeDemo4/Features'
import BestAppEver from '@/components/HomeDemo4/BestAppEver'
import KeyFeatures from '@/components/HomeDemo4/KeyFeatures'
import AppProgressStyle3 from '@/components/Common/AppProgressStyle3'
import AppDownloadStyle3 from '@/components/Common/AppDownloadStyle3'
import AppScreenshotsStyle4 from '@/components/AppScreenshots/AppScreenshotsStyle4'
import SoftwareIntegrationsThree from '@/components/Common/SoftwareIntegrationsThree'
import PricingPlanStyle4 from '@/components/PricingPlan/PricingPlanStyle4'
import ClientFeedbackStyle4 from '@/components/Feedbacks/ClientFeedbackStyle4'
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo';
import baseApiUrl from '@/utils/baseApiUrl';
 
const IndexPage4 = ({
    logo,
    banner,
    partners,
    video,
    feature,
    bestApp,
    keyFeatures,
    appProgress,
    downloadApp,
    appScreenshots,
    softwareIntegrations,
    pricingTable,
    feedbacks,
    infoText,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} />

            <MainBanner banner={banner} />

            <PartnerStyle2 partners={partners} />

            <IntroVideo video={video} />

            <Features feature={feature} />

            <BestAppEver bestApp={bestApp} />

            <KeyFeatures keyFeatures={keyFeatures} />

            <AppProgressStyle3 appProgress={appProgress} />

            <AppDownloadStyle3 downloadApp={downloadApp} />

            <AppScreenshotsStyle4 appScreenshots={appScreenshots} />

            <SoftwareIntegrationsThree softwareIntegrations={softwareIntegrations} />

            <PricingPlanStyle4 pricingTable={pricingTable} />

            <ClientFeedbackStyle4 feedbacks={feedbacks} />
            
            <div className="ptb-100">
                <FreeTrialStyle2 infoText={infoText} />
            </div>
             
            <FooterStyleTwo footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Banner API
    const bannerRes = await fetch(`${baseApiUrl}/home-banner-4`);
    const bannerData = await bannerRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partner-style-two`);
    const partnersData = await partnersRes.json();

    // Intro Video API
    const videoRes = await fetch(`${baseApiUrl}/intro-video`);
    const videoData = await videoRes.json();

    // Features API
    const featureRes = await fetch(`${baseApiUrl}/features`);
    const featureData = await featureRes.json();

    // Best App API
    const bestAppRes = await fetch(`${baseApiUrl}/best-app-ever-style-2`);
    const bestAppData = await bestAppRes.json();

    // Key Features API
    const keyFeaturesRes = await fetch(`${baseApiUrl}/key-features`);
    const keyFeaturesData = await keyFeaturesRes.json();

    // App Progress API
    const appProgressRes = await fetch(`${baseApiUrl}/app-progress-style-2`);
    const appProgressData = await appProgressRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/app-download-style-3`);
    const downloadAppData = await downloadAppRes.json();

    // App Screenshots API
    const appScreenshotsRes = await fetch(`${baseApiUrl}/app-screenshots-3`);
    const appScreenshotsData = await appScreenshotsRes.json();

    // Software Integrations API
    const softwareIntegrationsRes = await fetch(`${baseApiUrl}/software-integrations`);
    const softwareIntegrationsData = await softwareIntegrationsRes.json();

    // Pricing Table API
    const pricingTableRes = await fetch(`${baseApiUrl}/pricing-table`);
    const pricingTableData = await pricingTableRes.json();

    // Feedbacks API
    const feedbacksRes = await fetch(`${baseApiUrl}/feedbacks`);
    const feedbacksData = await feedbacksRes.json();

    // Free Trial Form API
    const infoTextRes = await fetch(`${baseApiUrl}/free-trial-form`);
    const infoTextData = await infoTextRes.json();

    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer-style-two`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            banner: bannerData,
            partners: partnersData,
            video: videoData,
            feature: featureData,
            bestApp: bestAppData,
            keyFeatures: keyFeaturesData,
            appProgress: appProgressData,
            downloadApp: downloadAppData,
            appScreenshots: appScreenshotsData,
            softwareIntegrations: softwareIntegrationsData,
            pricingTable: pricingTableData,
            feedbacks: feedbacksData,
            infoText: infoTextData,
            footer: footerData,
        },
    }
}

export default IndexPage4;