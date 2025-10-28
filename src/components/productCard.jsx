import "../components/productCars.css";
export default function ProductCard(props) {
    
    return (
    <div className="product-card">
      <h2>{props.name}</h2>
      <img src="../public/vite.svg" alt="Product Image" className="img" /> 
      <p>{props.description}</p>
      <span>{props.price}</span>
    </div>
  );
}