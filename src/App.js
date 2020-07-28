import React from 'react';
import { Router } from "@reach/router";
import { HomePage, ButtonPage, ColorPage } from './pages';
import { Row, Col, SidebarButton, SidebarTitle } from './components';

function App() {
  return (
    <div>
    <div style={{height: '100vh', width: 'auto', backgroundImage: "url('/assets/images/landing-2.svg')"}} />
      <Row>
        <div
          className="circular" 
          style={{
            height: "70px",
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            fontSize: '40px',
            fontWeight: '600',
            boxShadow: '0 2px 2px 0 rgb(240, 240, 240)'
          }}
        >
          <img style={{ height: '45px', margin: '0 0 0 20px' }} src="/assets/images/bob-shade.svg"/>
          tackle
        </div>
      </Row>
      <Row>
        <Col columns={2}>
          <SidebarTitle title="Practice" />
          <SidebarButton linkTo="/" buttonText="Home"/>
          <SidebarTitle title="Components" />
          <SidebarButton linkTo="/color" buttonText="Color"/>
          <SidebarButton linkTo="/button" buttonText="Button"/>
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