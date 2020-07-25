import React from 'react';
import { Router } from "@reach/router";
import { HomePage, ButtonPage, ColorPage } from './pages';
import { Row, Col, SidebarButton, SidebarTitle } from './components';

function App() {
  return (
    <div>
      <Row>
        <div
          className="circular" 
          style={{
            height: "50px",
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            fontSize: '30px'
          }}
        >
          tackle
        </div>
      </Row>
      <Row>
        <Col columns={2}>
          <SidebarTitle title="Getting Started" />
          <SidebarButton linkTo="/" buttonText="About"/>
          <SidebarButton linkTo="/button" buttonText="Button"/>
          <SidebarButton linkTo="/color" buttonText="Color"/>
        </Col>
        <Col columns={10}>
          <Router>
            <HomePage path="/"/>
            <ButtonPage path="/button"/>
            <ColorPage path="/color"/>
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;