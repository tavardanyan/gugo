import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import MainBanner from '@/components/HomeDemo2/MainBanner';
import Features from '@/components/HomeDemo2/Features';
import KeyFeatures from '@/components/HomeDemo2/KeyFeatures';
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2';
import IntroVideo from '@/components/HomeDemo2/IntroVideo';
import AppScreenshotsStyle2 from '@/components/AppScreenshots/AppScreenshotsStyle2';
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo';
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2';
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2';
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2';
import PartnerStyle1 from '@/components/Common/PartnerStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import baseApiUrl from '@/utils/baseApiUrl';
 
const IndexPage2 = ({
    logo,
    banner,
    feature,
    keyFeatures,
    appProgress,
    intro,
    appScreens,
    softwareIntegrations,
    feedbacks,
    pricingTable,
    infoText,
    partners,
    footer,
}) => {
    return (
        <>
            <NavbarStyleTwo logo={logo} /> 

            <MainBanner banner={banner} />

            <Features feature={feature} />

            <KeyFeatures keyFeatures={keyFeatures} />

            <AppProgressStyle2 appProgress={appProgress} />

            <IntroVideo intro={intro} />

            <AppScreenshotsStyle2 appScreens={appScreens} />

            <SoftwareIntegrationsTwo softwareIntegrations={softwareIntegrations} />

            <ClientFeedbackStyle2 feedbacks={feedbacks} />

            <PricingPlanStyle2 pricingTable={pricingTable} />

            <FreeTrialStyle2 infoText={infoText} />
            
            <PartnerStyle1 partners={partners} />
             
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Home Banner 2 API
    const bannerRes = await fetch(`${baseApiUrl}/home-banner-2`);
    const bannerData = await bannerRes.json();

    // Features API
    const featuresRes = await fetch(`${baseApiUrl}/features`);
    const featuresData = await featuresRes.json();

    // Key Features API
    const keyFeaturesRes = await fetch(`${baseApiUrl}/home-two-key-features`);
    const keyFeaturesData = await keyFeaturesRes.json();

    // App progress API
    const appProgressRes = await fetch(`${baseApiUrl}/app-progress-style-2`);
    const appProgressData = await appProgressRes.json();

    // Intro Video API
    const introRes = await fetch(`${baseApiUrl}/intro-video-with-title`);
    const introData = await introRes.json();

    // App Screenshots API
    const appScreensRes = await fetch(`${baseApiUrl}/app-screenshots-2`);
    const appScreensData = await appScreensRes.json();

    // Software Integrations API
    const softwareIntegrationsRes = await fetch(`${baseApiUrl}/software-integrations`);
    const softwareIntegrationsData = await softwareIntegrationsRes.json();

    // Feedbacks API
    const feedbacksRes = await fetch(`${baseApiUrl}/feedbacks`);
    const feedbacksData = await feedbacksRes.json();

    // Pricing Table API
    const pricingTableRes = await fetch(`${baseApiUrl}/pricingtable-2`);
    const pricingTableData = await pricingTableRes.json();

    // Free Trial Form API
    const infoTextRes = await fetch(`${baseApiUrl}/free-trial-form`);
    const infoTextData = await infoTextRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partners`);
    const partnersData = await partnersRes.json();
    
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            banner: bannerData,
            feature: featuresData,
            keyFeatures: keyFeaturesData,
            appProgress: appProgressData,
            intro: introData,
            appScreens: appScreensData,
            softwareIntegrations: softwareIntegrationsData,
            feedbacks: feedbacksData,
            pricingTable: pricingTableData,
            infoText: infoTextData,
            partners: partnersData,
            footer: footerData,
        },
    }
}

export default IndexPage2;