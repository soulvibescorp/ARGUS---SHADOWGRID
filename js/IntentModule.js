import React from 'react';

const IntentModule = ({ data }) => {
    return (
        <div className="module-card">
            <h2>Intent Detection</h2>
            <ul>
                {data.map((intent, index) => (
                    <li key={index}>
                        <strong>{intent.name}</strong> - Intent: {intent.intent}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IntentModule;
