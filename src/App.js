import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./screens/home";
import AboutMe from "./screens/aboutme";
import Experience from "./screens/experience";
import Skills from "./screens/skills";
import Contact from "./screens/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} element={<Home />}/>
          <Route exact path="/aboutme" component={AboutMe} element={<AboutMe />}/>
          <Route exact path="/experience" component={Experience} element={<Experience />}/>
          <Route exact path="/skills" component={Skills} element={<Skills />}/>
          <Route exact path="/contact" component={Contact} element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
