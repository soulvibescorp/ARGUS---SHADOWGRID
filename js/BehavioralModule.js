import React from 'react';

function BehavioralModule({ data }) {
    return (
        <div className="module-card">
            <h3>Behavioral Profiling</h3>
            <div className="data">
                <p>Total Profiles: {data.length}</p>
                {/* Add charts or heatmaps to visualize the behavioral data */}
            </div>
        </div>
    );
}

export default BehavioralModule;

import React from 'react';

const BehavioralModule = ({ data }) => {
    return (
        <div className="module-card">
            <h2>Behavioral Insights</h2>
            <ul>
                {data.map((user, index) => (
                    <li key={index}>
                        <strong>{user.name}</strong> - Interests: {user.interests.join(', ')} - Sentiment: {user.sentiment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BehavioralModule;
