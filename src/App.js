/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Router } from "@reach/router";
import { HomePage, ButtonPage, ColorPage } from './pages';
import { Row, Col, SidebarButton, SidebarTitle, Navbar } from './components';

function App() {
  return (
    <div css={css`min-height: 100vh;`}>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col columns={2}>
          <SidebarTitle title="Practice" />
          <SidebarButton linkTo="/" buttonText="Home" />
          <SidebarTitle title="Components" />
          <SidebarButton linkTo="/color" buttonText="Color" />
          <SidebarButton linkTo="/button" buttonText="Button" />
        </Col>
        <Col columns={10}>
          <Router>
            <HomePage path="/" />
            <ButtonPage path="/button" />
            <ColorPage path="/color" />
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;