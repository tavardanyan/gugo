import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import MainBanner from '@/components/HomeDemo3/MainBanner'
import PartnerStyle2 from '@/components/Common/PartnerStyle2'
import BestAppEver from '@/components/HomeDemo3/BestAppEver'
import Features from '@/components/HomeDemo3/Features'
import IntroVideo from '@/components/Common/IntroVideo'
import KeyFeatures from '@/components/HomeDemo3/KeyFeatures'
import AppScreenshotsStyle3 from '@/components/AppScreenshots/AppScreenshotsStyle3'
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PricingPlanStyle3 from '@/components/PricingPlan/PricingPlanStyle3'
import ClientFeedbackStyle3 from '@/components/Feedbacks/ClientFeedbackStyle3'
import BlogPost from '@/components/Common/BlogPost'
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import baseApiUrl from '@/utils/baseApiUrl';
 
const IndexPage3 = ({
    logo,
    banner,
    partners,
    bestApp,
    features,
    video,
    keyFeatures,
    appScreenshots,
    softwareIntegrations,
    downloadApp,
    pricingTable,
    feedbacks,
    blogTitle,
    posts,
    footer,
}) => {
    return (
        <>
            <NavbarStyleTwo logo={logo} />

            <MainBanner banner={banner} />

            <PartnerStyle2 partners={partners} />

            <BestAppEver bestApp={bestApp} />

            <Features features={features} />

            <IntroVideo video={video} />

            <KeyFeatures keyFeatures={keyFeatures} />

            <AppScreenshotsStyle3 appScreenshots={appScreenshots} />

            <SoftwareIntegrations softwareIntegrations={softwareIntegrations} />

            <AppDownloadStyle2 downloadApp={downloadApp} />

            <PricingPlanStyle3 pricingTable={pricingTable} />

            <ClientFeedbackStyle3 feedbacks={feedbacks} />

            <BlogPost blogTitle={blogTitle} posts={posts} />
             
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Banner API
    const bannerRes = await fetch(`${baseApiUrl}/home-banner-3`);
    const bannerData = await bannerRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partner-style-two`);
    const partnersData = await partnersRes.json();

    // Best App API
    const bestAppRes = await fetch(`${baseApiUrl}/best-app-ever-style-1`);
    const bestAppData = await bestAppRes.json();

    // Top Features API
    const featuresRes = await fetch(`${baseApiUrl}/home-three-top-features`);
    const featuresData = await featuresRes.json();

    // Intro Video API
    const videoRes = await fetch(`${baseApiUrl}/intro-video`);
    const videoData = await videoRes.json();

    // Key Features API
    const keyFeaturesRes = await fetch(`${baseApiUrl}/key-features`);
    const keyFeaturesData = await keyFeaturesRes.json();

    // App Screenshots API
    const appScreenshotsRes = await fetch(`${baseApiUrl}/app-screenshots`);
    const appScreenshotsData = await appScreenshotsRes.json();

    // Software Integrations API
    const softwareIntegrationsRes = await fetch(`${baseApiUrl}/software-integrations`);
    const softwareIntegrationsData = await softwareIntegrationsRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();

    // Pricing Table API
    const pricingTableRes = await fetch(`${baseApiUrl}/pricingtable-2`);
    const pricingTableData = await pricingTableRes.json();

    // Feedbacks API
    const feedbacksRes = await fetch(`${baseApiUrl}/feedbacks`);
    const feedbacksData = await feedbacksRes.json();

    // Blog Section Title API
    const blogTitleRes = await fetch(`${baseApiUrl}/latest-article`);
    const blogTitleData = await blogTitleRes.json();

    // Blog Posts API
    const postsRes = await fetch(`${baseApiUrl}/blog-posts?_sort=id:DESC`);
    const postsData = await postsRes.json();

    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            banner: bannerData,
            partners: partnersData,
            bestApp: bestAppData,
            features: featuresData,
            video: videoData,
            keyFeatures: keyFeaturesData,
            appScreenshots: appScreenshotsData,
            softwareIntegrations: softwareIntegrationsData,
            downloadApp: downloadAppData,
            pricingTable: pricingTableData,
            feedbacks: feedbacksData,
            blogTitle: blogTitleData,
            posts: postsData,
            footer: footerData,
        },
    }
}

export default IndexPage3;