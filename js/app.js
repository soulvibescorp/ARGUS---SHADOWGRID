import React, { useState, useEffect } from 'react';
import './styles/app.css';
import { BehavioralModule, CommunityModule, IntentModule } from './components'; // Import custom components
import { fetchBehavioralData, fetchCommunityData, fetchIntentData } from './services/mockApi'; // Import data fetching functions

function App() {
    // State to hold data for each module
    const [behavioralData, setBehavioralData] = useState([]);
    const [communityData, setCommunityData] = useState([]);
    const [intentData, setIntentData] = useState([]);
    const [apiPort, setApiPort] = useState(''); // State to manage API port input

    useEffect(() => {
        // Fetch data when component mounts
        setBehavioralData(fetchBehavioralData());
        setCommunityData(fetchCommunityData());
        setIntentData(fetchIntentData());
    }, []);

    const handleApiPortChange = (e) => {
        setApiPort(e.target.value); // Update API port value on change
        // Optional: Implement logic for API calls based on the port value
    };

    return (
        <div className="dashboard">
            <header>
                <h1>GovTech Intelligence Dashboard</h1>
                <p>Real-time data visualization and profiling</p>
                <div>
                    <label>Enter API Port: </label>
                    <input
                        type="text"
                        placeholder="e.g., http://localhost:5000"
                        value={apiPort}
                        onChange={handleApiPortChange}
                    />
                </div>
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
