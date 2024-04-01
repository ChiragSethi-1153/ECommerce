import React from "react";
import axios from "axios";

const updateUserService = async () => {
    const response = await axios.put(`${process.env.REACT_APP_ACCOUNT_SERVER}/users`);
    return response;
};

export default updateUserService;
