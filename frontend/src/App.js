import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/intro';
import Skills from './components/skills';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
