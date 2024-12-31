import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../store/productSlice";
import "./ProductFilters.css";

function ProductFilters() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.products);

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilter({ filterType, value }));
  };

  return (
    <div className="filters">
      <select
        value={filters.category}
        onChange={(e) => handleFilterChange("category", e.target.value)}
      >
        <option value="all">Tüm Kategoriler</option>
        <option value="men's clothing">Erkek Giyim</option>
        <option value="women's clothing">Kadın Giyim</option>
        <option value="electronics">Elektronik</option>
        <option value="jewelery">Takı</option>
      </select>

      <select
        value={filters.priceRange}
        onChange={(e) => handleFilterChange("priceRange", e.target.value)}
      >
        <option value="all">Tüm Fiyatlar</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100+">$100+</option>
      </select>
    </div>
  );
}

export default ProductFilters;
