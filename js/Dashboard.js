import React, { useState, useEffect } from 'react';
import { fetchBehavioralData, fetchCommunityData, fetchIntentData } from '../services/mockApi';
import BehavioralModule from './BehavioralModule';
import CommunityModule from './CommunityModule';
import IntentModule from './IntentModule';

const Dashboard = () => {
    const [behavioralData, setBehavioralData] = useState([]);
    const [communityData, setCommunityData] = useState([]);
    const [intentData, setIntentData] = useState([]);

    useEffect(() => {
        // Fetch mock data
        setBehavioralData(fetchBehavioralData());
        setCommunityData(fetchCommunityData());
        setIntentData(fetchIntentData());
    }, []);

    return (
        <div className="dashboard">
            <div className="header">
                <h1>GovTech Command Center</h1>
                <p>Access real-time insights and intelligence.</p>
            </div>
            <div className="modules">
                <BehavioralModule data={behavioralData} />
                <CommunityModule data={communityData} />
                <IntentModule data={intentData} />
            </div>
        </div>
    );
};

export default Dashboard;
