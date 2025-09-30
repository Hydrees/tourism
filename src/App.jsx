import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar.jsx"
import Home from "./Home.jsx"
import Destination from './Destination.jsx'
import Crew from './Crew.jsx'
import Technology from './Technology.jsx'
import { Routes, Route } from "react-router-dom"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="Technology" element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App
