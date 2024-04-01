import React from "react";
import axios from "axios";

const getProductService = async (inputs: string) => {
  if(inputs){
    const response = await axios.get(
      `${process.env.REACT_APP_PRODUCT_SERVER}/products?vendorId=${inputs}`
    );
    return response;

  }
  else{
    const response = await axios.get(
      `${process.env.REACT_APP_PRODUCT_SERVER}/products`
    );
    return response;

  }
};

export default getProductService;
