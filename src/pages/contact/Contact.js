import "./contact.css"
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          <LinkedInIcon  sx={{fontSize: 200, color: 'whitesmoke'}}></LinkedInIcon>
          <div className="icon-flex">
            <h2>LinkedIn</h2>
          </div>
          <div className="icon-flex">
            <GitHubIcon sx={{fontSize: 200, color: 'whitesmoke'}}></GitHubIcon>
            <h2>Github</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;