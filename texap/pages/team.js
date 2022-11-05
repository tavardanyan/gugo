import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Team = ({
    logo,
    pageTitle,
    teamMember,
    partners,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {pageTitle && (
                <PageBannerStyle1 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homePageUrl}
                    homePageText={pageTitle.homePage}
                    activePageText={pageTitle.activePage}
                />
            )}

            {teamMember && (
                <div className="team-area pt-100 pb-75">
                    <div className="container">
                        <div className="row justify-content-center">
                            {teamMember.teamMembers.map(member => (
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={member.id}>
                                    <div className="single-team-box">
                                        <div className="image">
                                            <div 
                                                style={{ 
                                                    backgroundImage: `url(${member.image.url})` 
                                                }}
                                            ></div>
                                        </div>
                                        <div className="content">
                                            <h3>{member.name}</h3>
                                            <span>{member.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
    const pageTitleRes = await fetch(`${baseApiUrl}/team-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // Team Member API
    const teamMemberRes = await fetch(`${baseApiUrl}/team-member`);
    const teamMemberData = await teamMemberRes.json();

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
            teamMember: teamMemberData,
            partners: partnersData,
            footer: footerData,
        },
    }
}

export default Team;