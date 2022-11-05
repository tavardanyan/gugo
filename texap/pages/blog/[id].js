import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import BlogDetailsContent from '@/components/Blog/BlogDetailsContent'
import baseApiUrl from '@/utils/baseApiUrl'
 
const BlogDetails = ({ logo, data }) => {
    return (
        <>
            <NavbarStyleOne logo={logo} /> 

            <PageBannerStyle1 
                pageTitle={data[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={data[0].title}
            />

            {data.map(d => (
                <BlogDetailsContent key={d.id} {...d} />
            ))}
  
            <FooterStyleOne />
        </>
    )
}

export async function getServerSideProps(context) {
    let {id} = context.query
    const res = await fetch(`${baseApiUrl}/blog-posts?slug=${id}`)
    const data = await res.json()

    // Logo API
    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    return {
        props: { 
            logo: logoData,
            data 
        }, // will be passed to the page component as props
    }
}

export default BlogDetails;