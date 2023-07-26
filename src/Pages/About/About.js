import './About.css'
import ashirSuit from '../../Images/Ashir-suit.png'

function About() {
  return (
    <div className="About">
      <div className="about-left">
        <div className="image-thumbnail">
          <div className="background">
            <img src={ashirSuit} alt="" className="suit-photo" />
          </div>
        </div>
      </div>

      <div className="about-right">
        <h1 className="about-head">ABOUT <span className="accent">ME</span></h1>
        <div className="about-body">
          <div className="who-am-i">
            <h3 className="about-subhead"> <span className="dash accent">&#8211;</span> Who am I? </h3>
            <p className="about-body-text">
              A 22-year-old Developer, who is driven by an unwavering passion for my craft and a resolute determination to prove my capabilities. If you are in search of a skilled professional who can elevate your website to embody your core values flawlessly, I am the ideal candidate to meet your requirements.
              <br />
              With a Bachelor's degree from the prestigious National Institute of Technology Durgapur and a profound understanding of modern web building techniques, I am fully equipped to ensure that my work surpasses all expectations.
            </p>
          </div>
          
          <div className="skills">
            <h3 className="about-subhead"> <span className="dash accent">&#8211;</span> Skills </h3>
            <p className="about-body-text">
              HTML/CSS, JavaScript, React.Js, Node.Js, Express.Js, MongoDB
            </p>
          </div>

          <a 
            href="https://docs.google.com/document/d/1kXpEWVzMYV8xygKWxXNnl4t-eaPyWGTdleQOoK0P_lg/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer" 
            className="primary-cta"
          > 
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About