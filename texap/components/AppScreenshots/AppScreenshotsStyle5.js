import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const AppScreenshotsStyle5 = ({ appScreenshots }) => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {appScreenshots && ( 
                <div className="screenshots-area">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {appScreenshots.subTitle}
                            </span>
                            <h2>{appScreenshots.title}</h2>
                        </div>

                        {display ? <OwlCarousel 
                            className="screenshots-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {appScreenshots.screenshots.map(screenshot => (
                                <div className="single-screenshot-item" key={screenshot.id}>
                                    <img src={screenshot.image.url} alt={screenshot.image.alternativeText} />
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            )}
        </>
    )
}

export default AppScreenshotsStyle5;