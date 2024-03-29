import { createSlice } from "@reduxjs/toolkit";
import getCategoryService from "../../services/Category/category.service";
import { getCategory } from "./categoryAction";


export type CategoryProps = {
  isLoading: boolean;
  isLoggedIn: boolean
  content: {
    uuid: String,
    categoryName: String,
    categoryImage: String[],
    subCategories: String[],
    }[]
  error: Object | null;
};

const initialState: CategoryProps = {
  isLoading: false,
  error: null,
  isLoggedIn: false,
  content: [{
    uuid: '',
    categoryName: '',
    categoryImage: [''],
    subCategories: [''],
  }]
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      if (action.payload) {
        state.isLoggedIn = true
        state.content = action.payload;
      }
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default categorySlice.reducer;
