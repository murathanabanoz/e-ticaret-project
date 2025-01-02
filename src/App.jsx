import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import Header from "./components/Header/Header";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { filteredItems, status, error } = useSelector(
    (state) => state.products
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Ürünler yükleniyor lütfen bekleyiniz...</div>;
  }

  if (status === "failed") {
    return <div>Hata meydana geldi: {error}</div>;
  }

  return (
    <div className="container">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <ProductFilters />
      <div className="products">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;
