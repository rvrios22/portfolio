import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/noPage/NoPage';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>

  );
}

export default App;
