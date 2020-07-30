import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import About from "./components/about.jsx";
import Landing from "./components/landing.jsx";
import Skills from "./components/skills.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Project from "./components/project.jsx";

function App() {
  return (
    <main>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Project} />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
      {/* <Landing/>
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      <Project/> */}
    </main>
  );
}

export default App;
