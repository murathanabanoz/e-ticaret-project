import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  placeOrder,
} from "../../store/cartSlice";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ isOpen, onClose }) {
  const { items, total, orderPlaced } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      if (
        window.confirm(
          "Ödeme yapmak için giriş yapmanız gerekmektedir. Giriş sayfasına yönlendirilmek ister misiniz?"
        )
      ) {
        onClose();
        navigate("/login");
      }
      return;
    }

    if (window.confirm("Siparişinizi onaylıyor musunuz?")) {
      dispatch(placeOrder());
    }
  };

  if (orderPlaced) {
    return (
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h2>Sipariş Durumu</h2>
          </div>
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h3>Siparişiniz Alındı!</h3>
            <p>Ürünleriniz en kısa sürede yola çıkacak.</p>
            <button className="continue-shopping" onClick={onClose}>
              Alışverişe Devam Et
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h2>Sepetim</h2>
          </div>
          <div className="empty-cart">
            <p>Sepetiniz boş</p>
            <button className="continue-shopping" onClick={onClose}>
              Alışverişe Devam Et
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Sepetim</h2>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                  {item.quantity > 1 && (
                    <span className="price-per-item">
                      (${item.price.toFixed(2)} her biri)
                    </span>
                  )}
                </p>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove-button"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Kaldır
              </button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <strong>Toplam: ${total.toFixed(2)}</strong>
          </div>
          <div className="cart-actions">
            <button
              className="clear-cart"
              onClick={() => dispatch(clearCart())}
            >
              Sepeti Temizle
            </button>
            <button className="checkout" onClick={handleCheckout}>
              Ödeme Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
