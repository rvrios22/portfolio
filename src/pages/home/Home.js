import './home.css'
import myImage from '../../imgs/profile-photo.jpeg'
const Home = () => {
  return (
    <div>
      <div className='hero-content'>
        <img src={myImage} alt='an images of the developer' className='hero-img'/>
        <div className='hero-text'>
          <h1>Welcome</h1>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
      <div className='bio'>
        <p>I am a fullstack developer specializing in React, Express, SQL, CSS.</p>
        <p>Have a glass of Dr. Pepper while you look around and enjoy!</p>
      </div>
    </div>
  )
};

export default Home;