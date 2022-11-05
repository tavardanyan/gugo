import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import MainBanner from '@/components/HomeDemo5/MainBanner'
import PartnerStyle1 from '@/components/Common/PartnerStyle1'
import AboutUsArea from '@/components/HomeDemo5/AboutUsArea'
import Features from '@/components/HomeDemo5/Features'
import KeyFeatures from '@/components/HomeDemo5/KeyFeatures'
import AppScreenshotsStyle5 from '@/components/AppScreenshots/AppScreenshotsStyle5'
import PricingPlanStyle5 from '@/components/PricingPlan/PricingPlanStyle5'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import FreeTrialStyle3 from '@/components/Common/FreeTrialStyle3'
import BlogPost from '@/components/Common/BlogPost'
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import baseApiUrl from '@/utils/baseApiUrl';
 
const IndexPage5 = ({
    logo,
    banner,
    partners,
    bestApp,
    feature,
    keyFeatures,
    appScreenshots,
    pricingTable,
    downloadApp,
    feedback,
    infoText,
    blogTitle,
    posts,
    footer,
}) => {
    return (
        <>
            <NavbarStyleThree logo={logo} />

            <MainBanner banner={banner} />

            <PartnerStyle1 partners={partners} />

            <AboutUsArea bestApp={bestApp} />

            <Features feature={feature} />

            <KeyFeatures keyFeatures={keyFeatures} />

            <div className="pb-100">
                <AppScreenshotsStyle5 appScreenshots={appScreenshots} />
            </div>

            <PricingPlanStyle5 pricingTable={pricingTable} />
            
            <div className="pt-100">
                <AppDownloadStyle2 downloadApp={downloadApp} />
            </div>

            <ClientFeedbackStyle5 feedback={feedback} />
            
            <div className="pt-100">
                <FreeTrialStyle3 infoText={infoText} />
            </div>

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
    const bannerRes = await fetch(`${baseApiUrl}/home-banner-5`);
    const bannerData = await bannerRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partners`);
    const partnersData = await partnersRes.json();

    // Best App API
    const bestAppRes = await fetch(`${baseApiUrl}/best-app-ever-style-3`);
    const bestAppData = await bestAppRes.json();

    // Features API
    const featureRes = await fetch(`${baseApiUrl}/features`);
    const featureData = await featureRes.json();

    // Key Features API
    const keyFeaturesRes = await fetch(`${baseApiUrl}/key-features`);
    const keyFeaturesData = await keyFeaturesRes.json();

    // App Screenshots API
    const appScreenshotsRes = await fetch(`${baseApiUrl}/app-screenshots`);
    const appScreenshotsData = await appScreenshotsRes.json();

    // Pricing Table API
    const pricingTableRes = await fetch(`${baseApiUrl}/pricingtable-2`);
    const pricingTableData = await pricingTableRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();

    // Feedbacks API
    const feedbackRes = await fetch(`${baseApiUrl}/client-feedback-style-5`);
    const feedbackData = await feedbackRes.json();

    // Free Trial API
    const infoTextRes = await fetch(`${baseApiUrl}/free-trial-form`);
    const infoTextData = await infoTextRes.json();

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
            feature: featureData,
            keyFeatures: keyFeaturesData,
            appScreenshots: appScreenshotsData,
            pricingTable: pricingTableData,
            downloadApp: downloadAppData,
            feedback: feedbackData,
            infoText: infoTextData,
            blogTitle: blogTitleData,
            posts: postsData,
            footer: footerData,
        },
    }
}

export default IndexPage5;