// import { Link } from 'react-router-dom';
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Body from "./home/Body";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Resume from "./About/Resume";
import Project from "./Project";
import Contact from "./Contact";
// import LogIn from "./home/LogIn";
import Layout from "./Layout";

function App() {
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Body /> */}

          {/* <Resume /> */}

          {/* <Project /> */}

          {/* <Contact /> */}
        </Layout>

        {/* <LogIn/> */}
      </div>
    </>
    // <LogIn/>
  );
}

export default App;
