import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <h1>Hello React</h1>
      <ProductCard name="Apple MacBook" description="This is Apple MacBook" price="$100"></ProductCard>
      <ProductCard name="Apple ipad" description="This is Apple Ipad" price="$200"></ProductCard>
      
      
    </>
  )
}

export default App
