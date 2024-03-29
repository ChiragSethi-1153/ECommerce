// import { createSlice } from "@reduxjs/toolkit";
// import { createProduct } from "./productAction";


// type initialStateProps = {
//   isLoading: boolean;
//   isLoggedIn: boolean
//   content: {
//       uuid: String,
//       category: string,
//       title: String,
//       description: string,
//       stock: number | null,
//       vendor: {
//         name: string,
//         email: string,
//         uuid: string,
//       },
//       productImages: string[]
//     }
//   error: Object | null;
// };

// const initialState: initialStateProps = {
//   isLoading: false,
//   error: null,
//   isLoggedIn: false,
//   content: {
//     uuid: '',
//       category: '',
//       title: '',
//       description: '',
//       stock: null,
//       vendor: {
//         name: '',
//         email: '',
//         uuid: '',
//       },
//       productImages: ['']
//   },
// };

// export const loginSlice = createSlice({
//   name: "products",
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(createProduct.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(createProduct.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       if (action.payload) {
//         state.isLoggedIn = true
//         state.content = action.payload;
//       }
//     });
//     builder.addCase(createProduct.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error;
//     });
//   },
// });

// export default loginSlice.reducer;

import React from 'react'

const productSlice = () => {
  return (
    <div>
      
    </div>
  )
}

export default productSlice
