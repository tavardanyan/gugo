import React from 'react'
import Link from 'next/link'
import baseApiUrl from '@/utils/baseApiUrl'
 
const ForgetPassword = ({ logo }) => {
    return (
        <>
            <div className="profile-authentication-area">
                <div className="logo">
                    {logo && (
                        <Link href="/">
                            <a className="navbar-brand">
                                <img 
                                    src={logo.blackLogo.url} 
                                    alt={logo.blackLogo.alternativeText} 
                                />
                            </a>
                        </Link>
                    )}
                </div>

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="forget-password-form">
                                <h2>Forget Password</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username or email" />
                                    </div>
                                    <button type="submit">Send Reset Link</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="social-links d-flex align-items-center justify-content-center">
                    <li><span>Follow Us On:</span></li>
                    <li>
                        <a href="https://www.facebook.com/" className="facebook" target="_blank">
                            <i className="ri-facebook-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" className="twitter" target="_blank">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" className="linkedin" target="_blank">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" className="instagram" target="_blank">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export async function getStaticProps() {
    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    return {
        props: {
            logo: logoData,
        },
    }
}

export default ForgetPassword;