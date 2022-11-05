import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
import baseApiUrl from '@/utils/baseApiUrl'
 
const BlogGrid = ({
    logo,
    pageTitle,
    posts,
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
                    activePageText={pageTitle.activeText}
                />
            )}
             
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        {posts && posts.map(post => (
                            <div className="col-lg-4 col-md-6" key={post.id}>
                                <div className="single-blog-post">
                                    <div className="image">
                                        <Link href={`/blog/${post.slug}`}>
                                            <a className="d-block">
                                                <img 
                                                    src={post.image.url} 
                                                    alt={post.image.alternativeText} 
                                                />
                                            </a>
                                        </Link>

                                        <div className="tag">
                                            {post.tag}
                                        </div>
                                    </div>

                                    <div className="content">
                                        <ul className="meta">
                                            <li>
                                                <i className="ri-time-line"></i> {post.date}
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href={`/blog/${post.slug}`}>
                                                <a>{post.title}</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
    const pageTitleRes = await fetch(`${baseApiUrl}/blog-page-title`);
    const pageTitleData = await pageTitleRes.json();

    // Blog Posts API
    const postsRes = await fetch(`${baseApiUrl}/blog-posts?_sort=id:DESC`);
    const postsData = await postsRes.json();
 
    // Footer API
    const footerRes = await fetch(`${baseApiUrl}/footer`);
    const footerData = await footerRes.json();

    return {
        props: {
            logo: logoData,
            pageTitle: pageTitleData,
            posts: postsData,
            footer: footerData,
        },
    }
}

export default BlogGrid;