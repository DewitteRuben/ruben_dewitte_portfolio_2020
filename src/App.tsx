import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./styles/theme";
import About from "./pages/about";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { PageContainer } from "./components/Layout";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={themes.primary}>
        <PageContainer>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/projects" />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </PageContainer>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
}

export default App;
