import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Experience from "./Components/Works/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context'
import { useContext } from "react";
import Analytics from './Analytics'
import ReactGA from 'react-ga';

const TRACKING_ID = "G-44YNXXL5LC";
ReactGA.initialize(TRACKING_ID);

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  Analytics();
  return (
    <div className="app" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Intro />
      <About />
      <Works />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
