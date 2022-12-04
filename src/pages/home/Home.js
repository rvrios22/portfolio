import './home.css'
import myImage from '../../imgs/profile-photo.jpeg'
import resume from '../../imgs/Resume.pdf'
const Home = () => {
  return (
    <div>
      <div className='hero-content'>
        <img src={myImage} alt='the developer' className='hero-img' />
        <div className='hero-text'>
          <h1>Welcome to Rios Development!</h1>
          <p>My name is Rafael. Thanks for stopping by!</p>
        </div>
      </div>
      <div className='bio'>
        <p>I am a fullstack developer specializing in: React, Express, SQL, CSS.</p>
        <p>Have a glass of Dr. Pepper while you look around and enjoy!</p>
      </div>
      <div>
        <h4 className='resume-download-header'>Download my resume <a href={resume} className='resume-download' download>here</a></h4>
      </div>
    </div>
  )
};

export default Home;