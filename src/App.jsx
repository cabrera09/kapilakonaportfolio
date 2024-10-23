import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';

import Contact from './components/Contact';
import './styles.css';

function App() {
    return (
        <>
            <Navbar />
            <About />
            <Tools />
            <Projects />
          
            <Contact />
        </>
    );
}

export default App;


