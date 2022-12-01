import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/noPage/NoPage';
import Navbar from './components/navbar/navbar';
import Wordle from './pages/projects/wordle-clone/src/Wordle'
import WeatherApp from './pages/projects/weather-app/src/WeatherApp'
import Translator from './pages/projects/translator/src/Translator'
import RabbitHole from './pages/projects/rabbit-hole/RabbitHole'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wordle-clone' element={<Wordle />} />
        <Route path='/weather-app' element={<WeatherApp />} />
        <Route path='/translator' element={<Translator />} />
        <Route path='/rabbithole' element={<RabbitHole />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>

  );
}

export default App;
