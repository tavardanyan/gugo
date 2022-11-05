import React from 'react';

const Features = ({ features }) => {
    return (
        <>
            {features && (
                <div className="features-area pt-100 pb-75">
                    <div className="container">
                        <ul className="features-boxes-list">
                            {features.list.map(list => (
                                <li key={list.id}>
                                    <div className="features-list-box">
                                        <div className={list.iconbgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Features;