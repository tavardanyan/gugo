import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import KeyFeatures from '@/components/HomeDemo1/KeyFeatures'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import baseApiUrl from '@/utils/baseApiUrl'
 
const Services = ({
    logo,
    services,
    feature,
    downloadApp,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {services && (
                <>
                    <PageBannerStyle1 
                        pageTitle={services.title}
                        homePageUrl={services.homeUrl}
                        homePageText={services.homeText}
                        activePageText={services.activePage}
                    />

                    <div className="features-area pt-100 pb-75">
                        <div className="container">
                            <div className="row justify-content-center">
                                {services.services.map(item => (
                                    <div className="col-lg-4 col-6 col-md-6 xsw-100" key={item.id}>
                                        <div className="features-item">
                                            <div className={item.iconBgCalss}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.shortDec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <KeyFeatures feature={feature} />

            <div className="ptb-100">
                <AppDownloadStyle1 downloadApp={downloadApp} />
            </div>
 
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Services API
    const servicesRes = await fetch(`${baseApiUrl}/services`);
    const servicesData = await servicesRes.json();

    // Features API
    const featureRes = await fetch(`${baseApiUrl}/key-features`);
    const featureData = await featureRes.json();

    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app`);
    const downloadAppData = await downloadAppRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            services: servicesData,
            feature: featureData,
            downloadApp: downloadAppData,
            footer: footerData,
        },
    }
}

export default Services;