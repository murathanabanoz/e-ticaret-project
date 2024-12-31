import { useSelector } from "react-redux";
import "./Header.css";

function Header({ onCartClick }) {
  const { items } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <h1>E-Ticaret Mağazası</h1>
      <button className="cart-button" onClick={onCartClick}>
        Sepet ({items.length})
      </button>
    </header>
  );
}

export default Header;
