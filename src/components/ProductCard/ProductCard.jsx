import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.substring(0, 100)}...</p>
      <div className="product-footer">
        <span className="price">${product.price}</span>
        <button
          className="add-to-cart"
          onClick={() => dispatch(addToCart(product))}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
