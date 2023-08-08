import './style.css';
import Navbar from './navbar'


import Home from './pages/home';
import Pris from './pages/pris';
import Pris50min from './pages/pris50min';
import Körkor from './pages/körkortspaketet';
import Körkor50min from './pages/körkortspaketet50min';
import Info from './pages/information';

import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pris' element={<Pris />} />
        <Route path='/pris50min' element={<Pris50min />} />
        <Route path='/körkortspaketet' element={<Körkor />} />
        <Route path='/körkortspaketet50' element={<Körkor50min />} />
        <Route path='/information' element={<Info />} />
      </Routes>
    </>
  );
}

export default App;