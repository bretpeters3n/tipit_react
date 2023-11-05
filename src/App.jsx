import {BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import HomeTest from './components/HomeTest'
import History from './components/History'
import Why from './components/Why'
import './css/navStyles.css'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleHamClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <div id="logo"></div>
            <button id="hamburger" className={isActive ? 'opened' : ''} onClick={handleHamClick} aria-label="Main Menu">
              <svg width="40" height="40" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
            <ul id="menu" className={isActive ? 'opened' : ''} >
              <li>
                <Link to="/" onClick={handleHamClick}>Home</Link>
              </li>
              <li>
                <Link to="/history" onClick={handleHamClick}>History</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleHamClick}>Why?</Link>
              </li>
              <li>
                <Link to="/home" onClick={handleHamClick}>Home(test)</Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="w-80 m-auto">
          <Routes>
            <Route path="/home" element={<HomeTest />} />
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<Why />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
