import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Phoenix from './pages/Phoenix';

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-background'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="intro" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="me" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          <div id="family" className='relative z-30 bg-primary'>
            <Projects />
          </div>
          <div id="doggo" className='relative z-30 bg-primary'>
            <Phoenix />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
