import './Home.css';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import illustration from '../../Images/homepage-illustration.png'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
        <div className="home-left">
            <div className="heading">
                <h2 className="top-sub">
                    <span className="accent">Salam! </span>
                    I am
                </h2>
                <h1 className="main-head">Mohammad <span className="accent">Ashir</span></h1>
            </div>

            <p className="tag-line">
                And I am just the <span className="accent">Full-stack Web Developer</span> your project needs
            </p>

            <div className="call-to-action">
                <NavLink to="/contact" className="primary-cta">Let's Talk!</NavLink>
                <NavLink to="/projects" className="secondary-cta">Check out my work <EastOutlinedIcon className="accent" id="left-arrow"/></NavLink>
            </div>
        </div>

        <div className="home-right">
            <img src={illustration} alt="" />
        </div>
    </div>
  )
}

export default Home