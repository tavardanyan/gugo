import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import MainBanner from '@/components/HomeDemo1/MainBanner';
import Features from '@/components/HomeDemo1/Features';
import IntroVideo from '@/components/HomeDemo1/IntroVideo';
import BestAppEver from '@/components/HomeDemo1/BestAppEver';
import KeyFeatures from '@/components/HomeDemo1/KeyFeatures';
import AppProgressStyle1 from '@/components/Common/AppProgressStyle1';
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1';
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1';
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations';
import PricingPlanStyle1 from '@/components/PricingPlan/PricingPlanStyle1';
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1';
import FreeTrialStyle1 from '@/components/Common/FreeTrialStyle1';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import baseApiUrl from '@/utils/baseApiUrl'
 
const Index = ({
    logo, 
    banner, 
    partners,
    features, 
    video,
    bestApp,
    feature,
    appProgress,
    downloadApp,
    appScreenshots,
    softwareIntegrations,
    pricingTable,
    feedbacks,
    freeTrialInfo,
    footer
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            <MainBanner banner={banner} partners={partners} />
    
            <Features feature={features} />

            <IntroVideo video={video} />

            <BestAppEver bestApp={bestApp} />

            <KeyFeatures feature={feature} />

            <AppProgressStyle1 appProgress={appProgress} />

            <AppDownloadStyle1 downloadApp={downloadApp} />

            <AppScreenshotsStyle1 appScreenshots={appScreenshots} />

            <SoftwareIntegrations softwareIntegrations={softwareIntegrations} />

            <PricingPlanStyle1 pricingTable={pricingTable} />

            <ClientFeedbackStyle1 feedbacks={feedbacks} />

            <FreeTrialStyle1 freeTrialInfo={freeTrialInfo} />

            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Banner API
    const bannerRes = await fetch(`${baseApiUrl}/banner`);
    const bannerData = await bannerRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partners`);
    const partnersData = await partnersRes.json();

    // Features API
    const featureRes = await fetch(`${baseApiUrl}/features`);
    const featureData = await featureRes.json();

    // Intro Video API
    const introVideoRes = await fetch(`${baseApiUrl}/intro-video`);
    const introVideoData = await introVideoRes.json();

    // Best App Ever API
    const bestAppEverRes = await fetch(`${baseApiUrl}/best-app-ever`);
    const bestAppEverData = await bestAppEverRes.json();

    // Key Features API
    const keyFeaturesRes = await fetch(`${baseApiUrl}/key-features`);
    const keyFeaturesData = await keyFeaturesRes.json();

    // App Progress API
    const appProgressRes = await fetch(`${baseApiUrl}/app-progress`);
    const appProgressData = await appProgressRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app`);
    const downloadAppData = await downloadAppRes.json();

    // App Screenshots API
    const appScreenshotsRes = await fetch(`${baseApiUrl}/app-screenshots`);
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

    // Free Trial API
    const freeTrialRes = await fetch(`${baseApiUrl}/free-trial-form`);
    const freeTrialData = await freeTrialRes.json();

    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            banner: bannerData,
            partners: partnersData,
            features: featureData,
            video: introVideoData,
            bestApp: bestAppEverData,
            feature: keyFeaturesData,
            appProgress: appProgressData,
            downloadApp: downloadAppData,
            appScreenshots: appScreenshotsData,
            softwareIntegrations: softwareIntegrationsData,
            pricingTable: pricingTableData,
            feedbacks: feedbacksData,
            freeTrialInfo: freeTrialData,
            footer: footerData,
        },
    }
}

export default Index;