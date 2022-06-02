import {Routes, Route} from 'react-router-dom'

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Github from './pages/Github'

import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import "./App.css"

const App = () => {
  return (
    <div className="APP_CONTAINER">
    <Header />
      <Routes>
        <Route path="" exact element={<ComingSoon />}>
          <Route path='contact' element={<Contact />}/>
        </Route>
        <Route path='about' element={<About />}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='github' element={<Github />} />
        
        <Route path="/terms" element={<Terms />}/>
        <Route path="/privacy" element={<PrivacyPolicy />}/>
      </Routes>
      <Footer />
      <div style={{
        background: 'linear-gradient(178deg, #210045, #0C0123)',
        height: '100vh',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: -1
      }}>

      </div>
    </div>
  );
}

export default App;
