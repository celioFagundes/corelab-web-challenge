import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateVehicle from './pages/Vehicles/Create'
import HomeVehicles from './pages/Vehicles/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeVehicles />} />
        <Route path='/vehicle/create' element={<CreateVehicle />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
