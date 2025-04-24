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
