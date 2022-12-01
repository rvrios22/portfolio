import './projects.css'
import { Link } from "react-router-dom";
import wordleImg from '../../imgs/wordleImg.png'
import weatherImg from '../../imgs/weatherImg.png'
import transaltorImg from '../../imgs/translatorImg.png'
import rabbitHoleImg from '../../imgs/rabbitHoleImg.png'

const Projects = () => {
    return (
      <div>
        <h1 className='projects-header'>My Projects</h1>
        <div className="project-container">
          <h3 className='project-titles'>Wordle Clone</h3>
          <Link to='/wordle-clone'>
            <img src={wordleImg} alt='a link to the Wordle Clone app' className='project-tiles'/>
          </Link>
          <h3 className='project-titles'>Weather App</h3>
          <Link to='/weather-app'>
            <img src={weatherImg} alt='a link to the Weather app' className='project-tiles'/>
          </Link>
          <h3 className='project-titles'>Translator</h3>
          <Link to='/translator'>
            <img src={transaltorImg} alt='a link to the Translation app' className='project-tiles'/>
          </Link>
          <h3 className='project-titles'>The Rabbit Hole</h3>
          <Link to='/rabbithole'>
            <img src={rabbitHoleImg} alt='a link to the Rabbit Hole arcade' className='project-tiles'/>
          </Link>
          <div className='bottom-spacer'></div>
        </div>
      </div>
      );
  };
  
  export default Projects;