import React, { useState, useEffect } from 'react';
import { BehavioralModule, CommunityModule, IntentModule } from './components'; // Your custom modules
import './styles/app.css';

function App() {
    // State to hold data for each module
    const [behavioralData, setBehavioralData] = useState([]);
    const [communityData, setCommunityData] = useState([]);
    const [intentData, setIntentData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/behavioral-profiles');
            const data = await res.json();
            setBehavioralData(data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <div className="dashboard">
            <header>
                <h1>GovTech Intelligence Dashboard</h1>
                <p>Real-time data visualization and profiling</p>
            </header>
            <div className="modules-container">
                <BehavioralModule data={behavioralData} />
                <CommunityModule data={communityData} />
                <IntentModule data={intentData} />
            </div>
        </div>
    );
}

export default App;
