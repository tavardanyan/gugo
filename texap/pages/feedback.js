import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2'
import ClientFeedbackStyle3 from '@/components/Feedbacks/ClientFeedbackStyle3'
import ClientFeedbackStyle4 from '@/components/Feedbacks/ClientFeedbackStyle4'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import baseApiUrl from '@/utils/baseApiUrl'
 
const Feedback = ({
    logo,
    pageTitle,
    feedbacks,
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

            <ClientFeedbackStyle1 feedbacks={feedbacks} />

            <ClientFeedbackStyle3 feedbacks={feedbacks} />
            
            <div className="pb-100">
                <ClientFeedbackStyle2 feedbacks={feedbacks} />
            </div>
            
            <ClientFeedbackStyle4 feedbacks={feedbacks} />
  
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
    const pageTitleRes = await fetch(`${baseApiUrl}/feedback-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // Feedbacks API
    const feedbacksRes = await fetch(`${baseApiUrl}/feedbacks`);
    const feedbacksData = await feedbacksRes.json();

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
            feedbacks: feedbacksData,
            partners: partnersData,
            footer: footerData,
        },
    }
}

export default Feedback;