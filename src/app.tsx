import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateVehicle from './pages/Vehicles/Create'
import EditVehicle from './pages/Vehicles/Edit'
import HomeVehicles from './pages/Vehicles/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeVehicles />} />
        <Route path="/vehicles/create" element={<CreateVehicle />} />
        <Route path="/vehicles/edit/:id" element={<EditVehicle />} />
      </Routes>
    </Router>
  )
}
export default App
