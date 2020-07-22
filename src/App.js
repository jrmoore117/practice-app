import React from 'react';
import { Router } from "@reach/router";
import { HomePage, ButtonPage } from './pages';
import { Row, Col, SidebarButton, SidebarTitle } from './components';

function App() {
  return (
    <div>
      <Row>
        <div style={{height: "50px"}}></div>
      </Row>
      <Row className="row-fluid">
        <Col className="xl2">
          <SidebarTitle title="Getting Started" />
          <SidebarButton linkTo="/" buttonText="About"/>
          <SidebarButton linkTo="/button" buttonText="Button"/>
        </Col>
        <Col className="xl10">
          <Router>
            <HomePage path="/"/>
            <ButtonPage path="/button"/>
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;