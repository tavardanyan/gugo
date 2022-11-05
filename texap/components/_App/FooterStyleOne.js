// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const FooterStyleOne = ({ footer }) => {
    return (
        <>
            {footer && (
                <div className="footer-area">
                    <div className="container">
                        <div className="footer-content">
                            <Link href="/">
                                <a className="logo">
                                    <img src={footer.logo.url} alt={footer.logo.alternativeText} />
                                </a>
                            </Link>

                            <ul className="social-links">
                                {footer.socialLinks.map(link => (
                                    <li key={link.id}>
                                        <a href={link.url} target="_blank">
                                            <i className={link.icon}></i>
                                        </a>
                                    </li> 
                                ))}
                            </ul>

                            <ul className="navbar-nav">
                                {footer.manuItem.map(item => (
                                    <li className="nav-item" key={item.id}>
                                        <Link href={item.url}>
                                            <a className="nav-link">{item.text}</a>
                                        </Link>
                                    </li> 
                                ))}
                            </ul>

                            <p className="copyright">
                                {footer.CopyrightText}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FooterStyleOne;