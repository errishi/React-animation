import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agency from './pages/Agency';
import Navbar from './components/Navigation/Navbar';
import FullScreenNav from './components/Navigation/FullScreenNav';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Navbar/>
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App;