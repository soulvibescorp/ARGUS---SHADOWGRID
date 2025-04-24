import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
