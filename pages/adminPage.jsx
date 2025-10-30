import { Routes, Route } from 'react-router-dom'
export default function AdminPage() {
    return (
      <div className ='w-full h-screen bg-amber-700 flex flex-row'>       
        <div className="w-[25%] h-full bg-blue-200 static"></div>
        <div className="w-[75%] h-full bg-green-200">
          <Routes path="/">
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/orders" element={<h1>Orders</h1>} />
          </Routes>
        </div>
      </div>
    );
  }