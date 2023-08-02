import {useState} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  const [hamMenuBar, setHamMenuBar] = useState("ham-line unclicked");
  const [hiddenMenuClass, setHiddenMenuClass] = useState("phone-nav-bg");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    if(!isMenuClicked){
      setHamMenuBar("ham-line clicked");
      setHiddenMenuClass("phone-nav-bg visible");
    }

    else{
      setHamMenuBar("ham-line unclicked");
      setHiddenMenuClass("phone-nav-bg");
    }

    setIsMenuClicked(!isMenuClicked);
  }

  return (

    <div className="Navbar">
        <div className="logo">
          Folio <span className="accent">.</span>
        </div>

        <div className="nav-right">
          <div className="desk-nav">
            <div className="nav-items">
              <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/">Home</NavLink> </div>
              <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/about">About</NavLink> </div>
              <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/projects">Projects</NavLink> </div>
              <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/contact">Contact</NavLink> </div>
            </div>
          </div>

          <div className="phone-nav">
            <div className="hamburger-menu" onClick={handleMenuClick}>
              <div className={hamMenuBar}></div>
              <div className={hamMenuBar}></div>
              <div className={hamMenuBar}></div>
            </div>
            <div className={hiddenMenuClass}>
              <div className="nav-items">
                <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/">Home</NavLink> </div>
                <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/about">About</NavLink> </div>
                <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/projects">Projects</NavLink> </div>
                <div className="nav-item"> <NavLink className="nav-link nav-hover" to="/contact">Contact</NavLink> </div>
              </div>
            </div>
          </div>

        </div>

        
    </div>
  )
}

export default Navbar;