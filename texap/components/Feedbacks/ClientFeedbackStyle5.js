import React from 'react'
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel,
} from 'react-tabs';

const ClientFeedbackStyle5 = ({ feedback }) => {
    return (
        <>
            {feedback && (
                <div className="feedback-area bg-F4F8FC ptb-100">
                    <div className="container">
                        <div className="feedback-tabs">
                            <Tabs>
                                {feedback.TabPanel.map(info => (
                                    <TabPanel key={info.id}>
                                        <p>{info.longText}</p>
                                        <h6><span>{info.name}</span> {info.designation}</h6>
                                    </TabPanel>
                                ))}
                                <TabList>
                                    {feedback.TabList.map(client => (
                                        <Tab key={client.id}>
                                            <img 
                                                src={client.image.url} 
                                                alt={client.image.alternativeText} 
                                            />
                                        </Tab>
                                    ))}
                                </TabList>
                            </Tabs>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ClientFeedbackStyle5;