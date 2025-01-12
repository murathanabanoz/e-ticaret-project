import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <p>
            Müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmayı
            hedefleyen bir e-ticaret platformu.
          </p>
        </div>
        <div className="footer-section">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>İletişim</h3>
          <p>Email: info@eticaret.com</p>
          <p>Tel: +90 (212) 123 45 67</p>
          <p>Adres: Örnek Mahallesi, E-Ticaret Caddesi No:123</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Ticaret Mağazası. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
