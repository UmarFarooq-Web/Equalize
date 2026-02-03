import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import MainLayout from './Pages/components/MainLayout'
import LoginPage from './Pages/login/loginPage'
import SignupPage from './Pages/login/SignupPage'

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path='/dashboard' element={<MainLayout />} >
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path='auth/login' element={<LoginPage/>}/>
      <Route path='auth/signup' element={<SignupPage/>}/>
    </Routes>
  )
}

export default App
