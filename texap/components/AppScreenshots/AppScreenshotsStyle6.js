import React from 'react'
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel, 
    resetIdCounter 
} from 'react-tabs';
resetIdCounter();

const AppScreenshotsStyle6 = ({ screenshots }) => {
    return (
        <>
            {screenshots && ( 
                <div className="screenshots-area bg-black-color ptb-100">
                    <div className="container">
                        <div className="section-title color-white">
                            <span className="sub-title">
                                {screenshots.subTitle}
                            </span>
                            <h2>{screenshots.title}</h2>
                        </div>

                        <div className="screenshots-tabs">
                            <Tabs>
                                <TabList>
                                    {screenshots.tabList.map(heading => (
                                        <Tab key={heading.id}>
                                            <i className="ri-exchange-dollar-line"></i> 
                                            {heading.title}
                                        </Tab>  
                                    ))}
                                </TabList>
                                
                                {screenshots.screenshot.map(image => (
                                    <TabPanel key={image.id}>
                                        <img 
                                            src={image.image.url} 
                                            alt={image.image.alternativeText} 
                                        />
                                    </TabPanel>  
                                ))} 
                            </Tabs>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AppScreenshotsStyle6;