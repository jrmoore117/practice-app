/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Router } from "@reach/router";
import { HomePage, ButtonPage, ColorPage } from './pages';
import { Row, Col, SidebarButton, SidebarTitle, Navbar, Button } from './components';

function App() {
  return (
    <div css={css`min-height: 200vh;`}>
      <div css={css`
        min-height: 100vh;
        min-width: 100vw;
        background-image: url("/assets/images/landing.svg");
        background-size: cover;
        background-position: center;`}
      >
        <div css={css`
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 100px;`}
        >
          <Button type="secondary">Get started</Button>
        </div>
      </div>
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