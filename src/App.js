import React from 'react';
import { Router } from "@reach/router";
import { ThemeProvider } from 'emotion-theming'
import { HomePage, ComponentPage, ColorPage, ButtonPage, HooksPage } from './pages';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;