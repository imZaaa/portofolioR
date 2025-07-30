import "./assets/styles/style.css";
import Home from './sections/Home';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
 
  return (
    <>
      <Navbar />
      
      <Home />

      <About />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
