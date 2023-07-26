import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MailOutline } from '@mui/icons-material';
import './Contact.css';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        alert("Message Sent Successfully!");
      }, 
      (error) => {
        console.log(error.text);
    });

  };

  return (
    <div className="Contact">
        <div className="contact-left">
          <h1 className="contact-head">
            Let's <span className="accent"> chat</span>.
            <br />
            Tell me about your project.
          </h1>

          <p className="contact-tagline">
            Let's create something <span className="accent">amazing</span> together!
          </p>

          <div className="mail-me">
            <div className="mail-icon-container">
              <MailOutline />
            </div>
            <div className="mail-text">
              <div>Mail me at</div>
              <div className="accent">mohammadashir7080@gmail.com</div>
            </div>
          </div>
        </div>



        <div className="contact-right">
          <h2 className="contact-subhead">Send me a <span className="accent">message</span>.</h2>
          <form ref={form} onSubmit={sendEmail}> 
            <input className="input" type="text" placeholder="Name*" name="name" id="name" required />
            <input className="input" type="email" placeholder="Email Address*" name="email" id="email" required />
            <input className="input" type="text" placeholder="Subject" name="subject" id="subject" required />
            
            <br />
            <div className="message-container">
              <label htmlFor="message" className="message-label">Tell me about your project*</label>
              <br />
              <textarea name="message" id="message" required></textarea>  
            </div>

            <button className="send-btn">Send</button>
          </form>
        </div>
    </div>
  )
}

export default Contact