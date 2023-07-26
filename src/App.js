import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
