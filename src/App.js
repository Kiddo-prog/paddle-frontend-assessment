import {Routes, Route} from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Github from './pages/Github';



function App() {
  return (
    <>
      <Routes>
        <Route path="" exact element={<ComingSoon />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='github' element={<Github />} />
      </Routes>
    </>
  );
}

export default App;
