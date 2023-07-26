import './Navbar.css';
import { NavLink } from 'react-router-dom'

function Navbar() {
  
  return (

    <div className="Navbar">
        <div className="logo">
          Folio <span className="logo-dot">.</span>
        </div>

        <div className="right">
            <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/">Home</NavLink> </div>
            <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/about">About</NavLink> </div>
            <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/projects">Projects</NavLink> </div>
            <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/contact">Contact</NavLink> </div>
        </div>
    </div>
  )
}

export default Navbar;