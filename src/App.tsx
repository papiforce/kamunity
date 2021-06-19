import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "core/Theme";

import Layout from "pages/Layout";
import HomePage from "pages/HomePage";
import KamaradesPage from "pages/KamaradesPage";
import ContactPage from "pages/ContactPage";

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

          <Route
            exact
            path="/kamarades"
            component={() => (
              <Layout>
                <KamaradesPage />
              </Layout>
            )}
          />

          <Route
            exact
            path="/contact-et-dons"
            component={() => (
              <Layout>
                <ContactPage />
              </Layout>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
