import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'
 
const FAQ = ({ logo, faqs, footer }) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            {faqs && (
                <>
                    <PageBannerStyle1 
                        pageTitle={faqs.title}
                        homePageUrl={faqs.homeUrl}
                        homePageText={faqs.homeText}
                        activePageText={faqs.activePage}
                    />

                    <div className="faq-area ptb-100">
                        <div className="container">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    {faqs.faqList.map(list => (
                                        <div key={list.id}>
                                            <AccordionItem uuid={list.itemId} >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span>
                                                            {list.title}
                                                        </span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>

                                                <AccordionItemPanel>
                                                    <ReactMarkdown>
                                                        {list.longDec}
                                                    </ReactMarkdown>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </div>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
        
                    <div className="contact-info-area pb-100">
                        <div className="container">
                            <div className="contact-info-inner">

                                <h2>{faqs.infoTitle}</h2>

                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-contact-info-box">
                                            <div className="icon bg1">
                                                <i className="ri-customer-service-2-line"></i>
                                            </div>
                                            <h3>{faqs.phone}</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-contact-info-box">
                                            <div className="icon">
                                                <i className="ri-earth-line"></i>
                                            </div>
                                            <h3>{faqs.email}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="lines">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <FooterStyleOne footer={footer} />
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    // faqs API
    const faqsRes = await fetch(`${baseApiUrl}/faqs`);
    const faqsData = await faqsRes.json();

    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            faqs: faqsData,
            footer: footerData,
        },
    }
}

export default FAQ;