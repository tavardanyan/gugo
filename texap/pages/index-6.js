import React from 'react'
import NavbarStyleFour from '@/components/_App/NavbarStyleFour'
import MainBanner from '@/components/HomeDemo6/MainBanner'
import PartnerStyle1 from '@/components/Common/PartnerStyle1'
import AboutUsContent from '@/components/HomeDemo6/AboutUsContent'
import FunfactStyleOne from '@/components/Common/FunfactStyleOne'
import KeyFeatures from '@/components/HomeDemo6/KeyFeatures'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import AppScreenshotsStyle6 from '@/components/AppScreenshots/AppScreenshotsStyle6'
import ClientFeedbackStyle6 from '@/components/Feedbacks/ClientFeedbackStyle6'
import FreeTrialStyle3 from '@/components/Common/FreeTrialStyle3'
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2'
import BlogPost from '@/components/Common/BlogPost'
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo'
import FooterStyleThree from '@/components/_App/FooterStyleThree';
import baseApiUrl from '@/utils/baseApiUrl';

const IndexPage6 = ({
    logo,
    banner,
    partners,
    aboutUs,
    funfact,
    keyFeatures,
    downloadApp,
    screenshots,
    feedbacks,
    infoText,
    pricingTable,
    softwareIntegrations,
    blogTitle,
    posts,
    footer,
}) => {
    return (
        <>
            <NavbarStyleFour logo={logo} />

            <MainBanner banner={banner} />

            <PartnerStyle1 partners={partners} />

            <AboutUsContent aboutUs={aboutUs} />

            <FunfactStyleOne funfact={funfact} />

            <KeyFeatures keyFeatures={keyFeatures} />

            <AppDownloadStyle2 downloadApp={downloadApp} />

            <AppScreenshotsStyle6 screenshots={screenshots} />

            <ClientFeedbackStyle6 feedbacks={feedbacks} />

            <FreeTrialStyle3 infoText={infoText} />

            <PricingPlanStyle2 pricingTable={pricingTable} />

            <SoftwareIntegrationsTwo softwareIntegrations={softwareIntegrations} />

            <BlogPost blogTitle={blogTitle} posts={posts} />
      
            <FooterStyleThree footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Banner API
    const bannerRes = await fetch(`${baseApiUrl}/home-banner-6`);
    const bannerData = await bannerRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partners`);
    const partnersData = await partnersRes.json();

    // About Us API
    const aboutUsRes = await fetch(`${baseApiUrl}/home-6-about-us`);
    const aboutUsData = await aboutUsRes.json();

    // Funfact API
    const funfactRes = await fetch(`${baseApiUrl}/funfact-style-one`);
    const funfactData = await funfactRes.json();

    // Key Features API
    const keyFeaturesRes = await fetch(`${baseApiUrl}/home-two-key-features`);
    const keyFeaturesData = await keyFeaturesRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();

    // Screenshots API
    const screenshotsRes = await fetch(`${baseApiUrl}/home-6-app-screenshots`);
    const screenshotsData = await screenshotsRes.json();

    // Feedbacks API
    const feedbacksRes = await fetch(`${baseApiUrl}/client-review-style-6`);
    const feedbacksData = await feedbacksRes.json();

    // Free Trial API
    const infoTextRes = await fetch(`${baseApiUrl}/free-trial-form`);
    const infoTextData = await infoTextRes.json();

    // Pricing Table API
    const pricingTableRes = await fetch(`${baseApiUrl}/pricingtable-2`);
    const pricingTableData = await pricingTableRes.json();

    // Software Integrations API
    const softwareIntegrationsRes = await fetch(`${baseApiUrl}/software-integrations`);
    const softwareIntegrationsData = await softwareIntegrationsRes.json();

    // Blog Section Title API
    const blogTitleRes = await fetch(`${baseApiUrl}/latest-article`);
    const blogTitleData = await blogTitleRes.json();

    // Blog Posts API
    const postsRes = await fetch(`${baseApiUrl}/blog-posts?_sort=id:DESC`);
    const postsData = await postsRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer-style-two`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            banner: bannerData,
            partners: partnersData,
            aboutUs: aboutUsData,
            funfact: funfactData,
            keyFeatures: keyFeaturesData,
            downloadApp: downloadAppData,
            screenshots: screenshotsData,
            feedbacks: feedbacksData,
            infoText: infoTextData,
            pricingTable: pricingTableData,
            softwareIntegrations: softwareIntegrationsData,
            blogTitle: blogTitleData,
            posts: postsData,
            footer: footerData,
        },
    }
}

export default IndexPage6;