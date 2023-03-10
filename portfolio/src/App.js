import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing Page/landing';
import Services from './Components/Services/Services';
import Exp from './Components/Experience/Exp';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import About from './Components/AboutMe/About';
//import './fonts/GreatVibes.ttf'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background: darkMode? 'black':'', 
    color: darkMode? 'white': '',
    }}
    >
      <Navbar/>
      <Landing/>
      <About/>
      <Services/>
      <Exp/>
      <Works />
      <Portfolio/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
