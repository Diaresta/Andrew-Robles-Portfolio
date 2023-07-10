import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header.js';
import NotFound from './components/NotFound.js';
import Projects from './components/Projects';
import Resume from './components/Resume.js';

function App() {
  return (
    <div id='top' className='App h-full'>
      <Header />
      <Routes>
        <Route path='' element={<AboutMe />} exact />
        <Route path='/projects' element={<Projects />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='/resume' element={<Resume />} exact />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
