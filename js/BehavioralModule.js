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
