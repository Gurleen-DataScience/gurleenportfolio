import React, { useState, useEffect } from 'react';
import MainHome from './components/home/MainHome';
import MainAbout from './components/about/MainAbout';
import MainProjects from './components/Projects/MainProjects';
import MainResume from './components/Resume/MainResume';
import Navbar from './components/NavBar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        {/* <ScrollToTop />  */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/project" element={<MainProjects />} />
          <Route path="/resume" element={<MainResume />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
