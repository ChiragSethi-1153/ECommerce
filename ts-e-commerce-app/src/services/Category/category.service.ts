import React from "react";
import axios from "axios";

const getCategoryService = async () => {
  const response = await axios.get(
    process.env.REACT_APP_PRODUCT_SERVER + "/categories"
  );
  return response;
};

export default getCategoryService;
