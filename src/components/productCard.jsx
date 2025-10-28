import "../components/productCars.css";
export default function ProductCard() {
  return (
    <div className="product-card">
      <h2>Product Name</h2>
      <img src="../public/vite.svg" alt="Product Image" className="img" /> 
      <p>Product Description</p>
      <span>$19.99</span>
    </div>
  );
}