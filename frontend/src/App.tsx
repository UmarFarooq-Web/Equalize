import {Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path='/dashboard' element={<p>Hello</p>} />

    </Routes>
  )
}

export default App
