// 404 Error Page Style File Path: public/css/pages-and-components-css/error.scss

import React from 'react';
import Link from 'next/link';
import baseApiUrl from '@/utils/baseApiUrl'

const ErrorPage = ({ error }) => {
    return (
		<>
			{error && (
				<div className="error-area ptb-100">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="error-content">
									<img 
										src={error.image.url} 
										alt={error.image.alternativeText} 
									/>

									<p>{error.shortDec}</p>

									<Link href={error.btnUrl}>
										<a className="default-btn">{error.btn}</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
    )
}

export async function getStaticProps() {
    // Error API
    const errorRes = await fetch(`${baseApiUrl}/404-error-page`);
    const errorData = await errorRes.json();

    return {
        props: {
            error: errorData,
        },
    }
}

export default ErrorPage;