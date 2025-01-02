import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Templates from './pages/Templates'
import Details from './pages/Details'
import Resume from './pages/Resume'


function App() {
  return(
    <Router>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/template' element={<Templates/>}></Route>
            <Route path='/details' element={<Details />} />
            <Route path='/resume' element={<Resume />} />

        </Routes>

    </Router>
  )
}

export default App
