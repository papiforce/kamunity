import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "core/Theme";

import Layout from "pages/Layout";
import HomePage from "pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Layout>
                <HomePage />
              </Layout>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
