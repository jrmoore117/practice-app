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
            height: "70px",
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            fontSize: '30px',
            boxShadow: '0 2px 2px 0 rgb(240, 240, 240)'
          }}
        >
          {/* <img style={{ height: '35px', margin: '0 10px 0 20px' }} src="/assets/images/tackle.svg"/> */}
          <img style={{ height: '35px', margin: '0 10px 0 20px' }} src="/assets/images/tackle-mar.svg"/>
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