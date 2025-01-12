import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Ürünleri çekmek için async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],
    status: "idle",
    error: null,
    filters: {
      category: "all",
      priceRange: "all",
    },
  },
  reducers: {
    setFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters[filterType] = value;

      // Filtreleme işlemi
      let filtered = [...state.items];

      // Kategori filtresi
      if (state.filters.category !== "all") {
        filtered = filtered.filter(
          (item) => item.category === state.filters.category
        );
      }

      // Fiyat aralığı filtresi
      switch (state.filters.priceRange) {
        case "0-50":
          filtered = filtered.filter((item) => item.price <= 50);
          break;
        case "50-100":
          filtered = filtered.filter(
            (item) => item.price > 50 && item.price <= 100
          );
          break;
        case "100+":
          filtered = filtered.filter((item) => item.price > 100);
          break;
        default:
          break;
      }

      state.filteredItems = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = productSlice.actions;
export default productSlice.reducer;
