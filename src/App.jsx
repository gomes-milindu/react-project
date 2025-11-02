import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import AdminPage from '../pages/adminPage'
import HomePage from '../pages/homePage'
import TestPage from '../pages/testPage'
import LoginPage from '../pages/loginPage'

function App() {
  

  return (
    <BrowserRouter>
      <div className= "w-full h-screen bg-red-200">
          <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/register" element={<h1>Register page</h1>}/>
            <Route path ="/admin/*" element={<AdminPage/>}/>
            <Route path ="/test" element={<TestPage/>}/>
            <Route path ="/login" element={<LoginPage/>}/>
          </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
