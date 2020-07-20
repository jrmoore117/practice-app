import React from 'react';
import { Router, Link } from "@reach/router";
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/button">Button</Link>
      </div>
      <div className="content">
        <Router>
          <HomePage path="/"/>
          <ButtonPage path="/button"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
