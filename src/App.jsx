import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import AdminPage from '../pages/adminPage'

function App() {
  

  return (
    <BrowserRouter>
      <div className= "w-full h-screen bg-red-200">
          <Routes>
            <Route path ="/" element={<h1>Home page</h1>}/>
            <Route path ="/register" element={<h1>Register page</h1>}/>
            <Route path ="/admin/*" element={<AdminPage/>}/>
          </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
