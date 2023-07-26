import './Projects.css';
import Project from '../../Components/Project/Project.js';

function Projects() {
  return (
    <div className="Projects">
      <h1 className="projects-head">PROJECTS</h1>

      
      <div className="projects-list">
        <Project />
      </div>
    </div>
  )
}

export default Projects