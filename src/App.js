import {Routes, Route} from 'react-router-dom'

import Github from './pages/Github';

function App() {
  return (
    <>
      <Routes>
        <Route path='github' element={<Github />} />
      </Routes>
    </>
  );
}

export default App;
