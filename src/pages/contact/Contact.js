import "./contact.css"
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Swal from 'sweetalert2';


const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    Toast.fire({
      icon: 'success',
      title: 'Thanks for your message, I will respond as soon as possible!',
      background: '#F5F6F7',
      color: 'black'
    })
    setUsername('')
    setUserEmail('')
    setUserMessage('')
  };

  return (
    <>
      <div className="flex-container">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label className="contact-labels">Name</label>
            <input className='contact-inputs' placeholder='Type Your Name...' type="text" name="user_name" value={username} onChange={e => setUsername(e.target.value)} required />
            <label className="contact-labels">Email</label>
            <input className='contact-inputs' placeholder='Type Your Email...' type="email" name="user_email" value={userEmail} onChange={e => setUserEmail(e.target.value)} required />
            <label className="contact-labels">Message</label>
            <textarea className='contact-inputs' placeholder='How can I help you?' name="message" value={userMessage} onChange={e => setUserMessage(e.target.value)} rows={4} cols={4} required />
            <button className='contact-button' type="submit">Send</button>
          </form>
        </div>
        <div className="social-icon-container">
          <div className="icon-flex">
            <a href="https://www.linkedin.com/in/rafael-v-rios/" rel="noreferrer" target='_blank'>
              <LinkedInIcon sx={{ fontSize: "2.5em", color: 'whitesmoke' }}></LinkedInIcon>
            </a>
          </div>
          <div className="icon-flex">
            <a href='https://github.com/rvrios22' rel="noreferrer" target='_blank'>
              <GitHubIcon sx={{ fontSize: "2.5em", color: 'whitesmoke' }}></GitHubIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;