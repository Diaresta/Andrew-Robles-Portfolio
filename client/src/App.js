import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id='top' className='App h-full'>
      <Header />
      <Routes>
        <Route path='' element={<AboutMe />} exact />
        <Route path='/projects' element={<Projects />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>
    </div>
  );
}

export default App;
