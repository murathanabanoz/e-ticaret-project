import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const { filteredItems, status, error } = useSelector(
    (state) => state.products
  );

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
    <div className="home-container">
      <ProductFilters />
      <div className="products">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
