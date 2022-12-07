import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/noPage/NoPage';
import Navbar from './components/navbar/navbar';
import Wordle from './pages/wordle-clone/Wordle'
import WeatherApp from './pages/weather-app/WeatherApp'
import Translator from './pages/translator/Translator'
import RabbitHole from './pages/rabbit-hole/RabbitHole'

function App() {
  return (
    <>
      <Router>
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
      </Router>

    </>

  );
}

export default App;
