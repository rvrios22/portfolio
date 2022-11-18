import './home.css'
import myImage from '../../imgs/profile-photo.jpeg'
const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>So nice to see you</h3>
      <img src={myImage} alt='an images of the developer' />
    </div>
  )
};

export default Home;