import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FunfactStyleOne from '@/components/Common/FunfactStyleOne'
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2'
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo'
import TeamMemberStyle1 from '@/components/Common/TeamMemberStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import AboutUsText from '@/components/About/AboutUsText'
import OurStats from '@/components/About/OurStats'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
 
const AboutSimple = ({
    logo,
    pageTitle,
    aboutUsText,
    funfact,
    appProgress,
    stats,
    softwareIntegrations,
    teamMember,
    partners,
    feedbacks,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {pageTitle && (
                <PageBannerStyle1 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homeUrl}
                    homePageText={pageTitle.home}
                    activePageText={pageTitle.activePage}
                />
            )}

            <AboutUsText aboutUsText={aboutUsText} />

            <FunfactStyleOne funfact={funfact} />

            <AppProgressStyle2 appProgress={appProgress} />

            <OurStats stats={stats} />

            <SoftwareIntegrationsTwo softwareIntegrations={softwareIntegrations} />

            <TeamMemberStyle1 teamMember={teamMember} />

            <PartnerStyle3 partners={partners} />

            <ClientFeedbackStyle1 feedbacks={feedbacks} />

            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Page Title API
    const pageTitleRes = await fetch(`${baseApiUrl}/about-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // About Us Text API
    const aboutUsTextRes = await fetch(`${baseApiUrl}/about-us-text`);
    const aboutUsTextData = await aboutUsTextRes.json();

    // Funfact API
    const funfactRes = await fetch(`${baseApiUrl}/funfact-style-one`);
    const funfactData = await funfactRes.json();

    // App progress API
    const appProgressRes = await fetch(`${baseApiUrl}/app-progress-style-2`);
    const appProgressData = await appProgressRes.json();

    // Our Stats API
    const statsRes = await fetch(`${baseApiUrl}/our-stats`);
    const statsData = await statsRes.json();

    // Software Integrations API
    const softwareIntegrationsRes = await fetch(`${baseApiUrl}/software-integrations`);
    const softwareIntegrationsData = await softwareIntegrationsRes.json();

    // Team Member API
    const teamMemberRes = await fetch(`${baseApiUrl}/team-member`);
    const teamMemberData = await teamMemberRes.json();

    // Partners API
    const partnersRes = await fetch(`${baseApiUrl}/partner-style-two`);
    const partnersData = await partnersRes.json();

    // Feedbacks API
    const feedbacksRes = await fetch(`${baseApiUrl}/feedbacks`);
    const feedbacksData = await feedbacksRes.json();

    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            pageTitle: pageTitleData,
            aboutUsText: aboutUsTextData,
            funfact: funfactData,
            appProgress: appProgressData,
            stats: statsData,
            softwareIntegrations: softwareIntegrationsData,
            teamMember: teamMemberData,
            partners: partnersData,
            feedbacks: feedbacksData,
            footer: footerData,
        },
    }
}

export default AboutSimple;