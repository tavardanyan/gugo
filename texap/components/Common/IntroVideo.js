import React from 'react'
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const IntroVideo = ({video}) => {
    
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {video && (
                <div className="videoContent">
                    <div className="video-area">
                        <div className="container">
                            <div className="video-box">
                                <img src={video.image.url} alt={video.image.alternativeText} />
        
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className={video.iconName}></i>
                                </div>

                                <div className="shape">
                                    <img className="shape1" src="/images/shape/shape1.png" alt="shape1" />
                                    <img className="shape2" src="/images/shape/shape2.png" alt="shape2" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={!isOpen} 
                        videoId={video.youtubeVideoId} 
                        onClose={() => setIsOpen(!isOpen)} 
                    />
                </div>
            )}
        </>
    )
}

export default IntroVideo;