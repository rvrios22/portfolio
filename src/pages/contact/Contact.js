import "./contact.css"
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import linkedin from '../../imgs/linkedin.png'
import github from '../../imgs/github.jpg'

const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setUsername('')
    setUserEmail('')
    setUserMessage('')
  };

  return (
    <>
      <div className="flex-container">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" value={username} onChange={e => setUsername(e.target.value)} />
            <label>Email</label>
            <input type="email" name="user_email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
            <label>Message</label>
            <textarea name="message" value={userMessage} onChange={e => setUserMessage(e.target.value)} rows={16} cols={16} />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="social-icon-container">
          <div className="icon-flex">
            <a href="https://www.linkedin.com/in/rafael-v-rios/" target='_blank' rel="noreferrer">
              <img src={linkedin} alt=' a link to my linkedin page' className="linkedin" />
            </a>
            <span>LinkedIn</span>
          </div>
          <div className="icon-flex">
            <a href="https://github.com/rvrios22" target='_blank' rel="noreferrer">
              <img src={github} alt='a link to my github page' className="github" />
            </a>
            <span>Github</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;