import React from 'react';
import { Router } from "@reach/router";
import { HomePage, ComponentPage, ColorPage, ButtonPage, HooksPage } from './pages';

function App() {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <ComponentPage path="/components">
          <HooksPage path="/" />
          <ColorPage path="/color" />
          <ButtonPage path="/button" />
        </ComponentPage>
      </Router>
    </div>
  );
}

export default App;