import "./assets/styles/style.css";
import Home from './sections/Home';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from "framer-motion"; // Penting!

function App() {
 
  return (
    <>
    <AnimatePresence mode="wait">
        <Navbar />
        
        <Home />

        <About />

        <Projects />

        <Contact />

        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
