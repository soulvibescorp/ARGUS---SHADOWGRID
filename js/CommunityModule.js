import React from 'react';

const CommunityModule = ({ data }) => {
    return (
        <div className="module-card">
            <h2>Community Insights</h2>
            <ul>
                {data.map((community, index) => (
                    <li key={index}>
                        <strong>{community.name}</strong> - Engagement: {community.engagement} - Activity: {community.activity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityModule;
