import { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-background'>
        <div className='wrapper' ref={wrapperRef}>
          <div id="about" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="projects" className='relative z-30 bg-primary'>
            <Projects />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
