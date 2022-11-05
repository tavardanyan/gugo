import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import baseApiUrl from '@/utils/baseApiUrl'
 
const Features = ({
    logo,
    pageTitle,
    feature,
    downloadApp,
    footer,
}) => {
    return (
        <>
            <NavbarStyleThree logo={logo} /> 

            {pageTitle && (
                <PageBannerStyle3 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homeUrl}
                    homePageText={pageTitle.homeText}
                    activePageText={pageTitle.activePage}
                />
            )}

            {feature && (
                <div className="features-area pt-100 pb-75 bg-F7F7FF">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {feature.subTitle}
                            </span>
                            <h2>{feature.title}</h2>
                        </div>

                        <div className="row justify-content-center">
                            {feature.lists.map(list => (
                                <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6" key={list.id}>
                                    <div className="single-features-item">
                                        <div className={list.iconBgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                        <p>{list.shortDec}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
    const pageTitleRes = await fetch(`${baseApiUrl}/features-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // Features API
    const featureRes = await fetch(`${baseApiUrl}/key-features`);
    const featureData = await featureRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            pageTitle: pageTitleData,
            feature: featureData,
            downloadApp: downloadAppData,
            footer: footerData,
        },
    }
}

export default Features;