import './home.css'
import myImage from '../../imgs/profile-photo.jpeg'
import resume from '../../imgs/Resume.pdf'
const Home = () => {
  return (
    <div>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Welcome to Rios Development!</h1>
        </div>
        <img src={myImage} alt='the developer' className='hero-img' />
      </div>
      <div className='bio'>
        <div className='about-me-text'>
          <h3>About Me</h3>
          <p>Thanks for stopping by! My name is Rafael and I am a full stack web developer. For the past five years I have worked in the pest control industry. Now I'm ready to control a different kind of bug (ba dum 'tss)... I have two years experience in web development and I'm ready to help you create your website! Take a look at Github repositories <a href='https://github.com/rvrios22?tab=repositories' target='_blank' rel='noreferrer'>here</a> the project page to see my work and get in touch via the contact page. I hope to speak to you soon! <br></br> P.S. You can download my resume at the bottom of this page.</p>
        </div>
        <div className='tech-stack-text'>
          <h3>Tech Stack</h3>
          <h4>Front End:</h4>
          <ul className='tech-list'>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <h4>Back End:</h4>
          <ul className='tech-list'>
            <li>Express</li>
            <li>JavaScript</li>
            <li>Sequelize</li>
            <li>SQL & MySQL Workbench</li>
          </ul>
        </div>
      </div>
      <div className='resume-container'>
        <hr className='home-spacer' />
        <h4 className='resume-download-header'>Download my resume <a href={resume} className='resume-download' download>here</a></h4>
      </div>
    </div>
  )
};

export default Home;