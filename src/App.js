/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Router } from "@reach/router";
import { HomePage, ComponentPage } from './pages';
import { Row, Col, SidebarButton, SidebarTitle, Navbar, Button } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <HomePage path="/" />
        <ComponentPage path="/components" />
      </Router>
    </div>
  );
}

export default App;