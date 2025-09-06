import React from 'react'
import Home from './components/Home'
import Marquee from './components/Marque'
import Weather from './components/Weather'
import Market from './components/Market'
import Solution from './components/Solution'

const App = () => {
  return (
    <div>
     <Home/>
     <Weather/>
     <Market/>
    </div>
  )
}

export default App