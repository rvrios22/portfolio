import { Link } from "react-router-dom";
import wordleImg from '../../imgs/wordleImg.png'
import weatherImg from '../../imgs/weatherImg.png'
import transaltorImg from '../../imgs/translatorImg.png'
import rabbitHoleImg from '../../imgs/rabbitHoleImg.png'

const Projects = () => {
    return (
      <>
        <h1>Projects</h1>
        <div className="project-container">
          <Link to='/wordle-clone'>
            <img src={wordleImg} alt='a link to the Wordle Clone app'/>
          </Link>
          <Link to='/weather-app'>
            <img src={weatherImg} alt='a link to the Weather app'/>
          </Link>
          <Link to='/translator'>
            <img src={transaltorImg} alt='a link to the Translation app'/>
          </Link>
          <Link to='/rabbithole'>
            <img src={rabbitHoleImg} alt='a link to the Rabbit Hole arcade'/>
          </Link>
        </div>
      </>
      );
  };
  
  export default Projects;