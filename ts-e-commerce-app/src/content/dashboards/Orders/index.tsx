import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import styles from "./Orders.module.css";
import BreadCrumHeader from "../../../components/Header/BreadCrumHeader";
import { CalendarMonth, CalendarMonthOutlined } from "@mui/icons-material";
import OrdersBody from "./body";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import OrderTable from "../OrderDetails/table";

const Orders = () => {
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box className={styles.orders}>
      <Box>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <BreadCrumHeader
            header={"Orders List"}
            subheader={[
              { link: "/vendor/dashboard", text: "Home" },
              { link: "/vendor/orders", text: "Orders" },
            ]}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              
              <DatePicker />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Box>
        </Stack>

        <Box
          sx={{ minWidth: 220, m: 4, justifyContent: "right", display: "flex" }}
        >
          <FormControl sx={{ width: "200px" }}>
            <InputLabel>Change Status</InputLabel>
            <Select
              value={status}
              label={`Change Status`}
              onChange={handleChange}
              sx={{ bgcolor: "#fff" }}
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Delivered"}>Delivered</MenuItem>
              <MenuItem value={"Canceled"}>Canceled</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <OrdersBody />
      </Box>
      
    </Box>
  );
};

export default Orders;
