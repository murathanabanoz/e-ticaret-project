import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import "./Navbar.css";

function Navbar({ onCartClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">E-Ticaret Mağazası</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
      <div className="nav-auth">
        {isAuthenticated ? (
          <>
            <Link to="/profile">
              <span className="username">{user?.name}</span>
            </Link>
            <button onClick={handleLogout} className="logout-button">
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-button">
              Giriş Yap
            </Link>
            <Link to="/register" className="register-button">
              Kayıt Ol
            </Link>
          </>
        )}
        <button className="cart-button" onClick={onCartClick}>
          Sepet ({items.length})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
