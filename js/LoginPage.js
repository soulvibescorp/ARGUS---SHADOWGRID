import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        if (username && password) {
            // Mock authentication
            history.push('/dashboard');
        } else {
            alert("Please enter both username and password!");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="title">GovTech Dashboard</h1>
                <input
                    type="text"
                    className="login-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin} className="login-button">Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
