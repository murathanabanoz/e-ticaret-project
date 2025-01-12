import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      if (
        window.confirm(
          "Sepete ürün eklemek için giriş yapmanız gerekmektedir. Giriş sayfasına yönlendirilmek ister misiniz?"
        )
      ) {
        navigate("/login");
      }
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.substring(0, 100)}...</p>
      <div className="product-footer">
        <span className="price">${product.price}</span>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
