import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./userAction";


type initialStateProps = {
  isLoading: boolean;
  isLoggedIn: boolean
  content: {
      uuid: string,
      category: string,
      title: string,
      description: string,
      stock: number | null,
      price: number | null
      vendorId: string
      vendor: {
        name: string,
        email: string,
      },
      productImages: string[]
    }[]
  error: Object | null;
};

const initialState: initialStateProps = {
  isLoading: false,
  error: null,
  isLoggedIn: false,
  content: [{
        uuid: '',
      category: '',
      title: '',
      description: '',
      stock: null,
      price: null,
      vendorId: '',
      vendor: {
        name: '',
        email: '',
      },
      productImages: ['']
  }],
};

export const loginSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      if (action.payload) {
        state.isLoggedIn = true
        state.content = action.payload;
      }
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default loginSlice.reducer;


