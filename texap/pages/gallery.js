import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
import baseApiUrl from '@/utils/baseApiUrl'
 
const Gallery = ({
    logo,
    gallery,
    downloadApp,
    footer,
}) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {gallery && (
                <>
                    <PageBannerStyle1 
                        pageTitle={gallery.title}
                        homePageUrl={gallery.homeUrl}
                        homePageText={gallery.homeText}
                        activePageText={gallery.activePageText}
                    />

                    <div className="gallery-area pt-100 pb-75">
                        <div className="container">
                            <div className="row justify-content-center">
                                {gallery.galleryImages.map(item => (
                                    <div className="col-lg-4 col-sm-6 col-md-6" key={item.id}>
                                        <div className="single-gallery-item">
                                            <img src={item.image.url} alt={item.image.alternativeText} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
 
            <AppDownloadStyle2 downloadApp={downloadApp} />
 
            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // Gallery API
    const galleryRes = await fetch(`${baseApiUrl}/gallery`);
    const galleryData = await galleryRes.json();
 
    // Download App API
    const downloadAppRes = await fetch(`${baseApiUrl}/download-app-style-2`);
    const downloadAppData = await downloadAppRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            gallery: galleryData,
            downloadApp: downloadAppData,
            footer: footerData,
        },
    }
}

export default Gallery;