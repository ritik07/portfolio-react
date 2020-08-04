import React,{useContext} from 'react';
import './App.css';
import './assests/css/bootstrap.css';
import './assests/css/style.css';
import './assests/css/open-sans.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
 


function App() {
  return (
    <div>
      <ThemeContextProvider>
      <Navbar/>
      <Intro/>
      <ThemeToggle/>
      <About/>
      <Skills/>
       <Work/>
      <Contact/>
      <Footer/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
