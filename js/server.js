const express = require('express');
const app = express();

// Middleware for handling JSON responses
app.use(express.json());

// Example API route for behavioral data
app.get('/api/behavioral-profiles', (req, res) => {
    // Mock data for behavioral profiling
    const profiles = [
        { id: 1, name: "User1", interests: ["Crypto", "Tech"], sentiment: "Positive" },
        { id: 2, name: "User2", interests: ["Politics", "Economics"], sentiment: "Neutral" }
    ];
    res.json(profiles);
});

// Start the server
app.listen(5000, () => console.log('Server is running on port 5000'));
