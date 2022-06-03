import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Snowfall from 'react-snowfall'

import TopNav from "./components/topNav";
import Home from "./screens/home";
import AboutMe from "./screens/aboutme";
import Experience from "./screens/experience";
import Skills from "./screens/skills";
import Contact from "./screens/contact";
import Resume from "./screens/resume";
import './App.css';

function App() {
  return (
    <div className="root-container">
      <Router>
        <Snowfall color="#fff" snowflakeCount={200}/>
        <TopNav />
        <Routes>
          <Route exact path="/" component={Home} element={<Home />}/>
          <Route exact path="/aboutme" component={AboutMe} element={<AboutMe />}/>
          <Route exact path="/resume" component={Resume} element={<Resume />}/>
          <Route exact path="/experience" component={Experience} element={<Experience />}/>
          <Route exact path="/skills" component={Skills} element={<Skills />}/>
          <Route exact path="/contact" component={Contact} element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
