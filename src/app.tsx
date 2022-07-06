import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateVehicle from './pages/Vehicles/Create'
import EditVehicle from './pages/Vehicles/Edit'
import HomeVehicles from './pages/Vehicles/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeVehicles />} />
        <Route path='/vehicles/create' element={<CreateVehicle />} />
        <Route path='/vehicles/edit/:id' element={<EditVehicle />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
