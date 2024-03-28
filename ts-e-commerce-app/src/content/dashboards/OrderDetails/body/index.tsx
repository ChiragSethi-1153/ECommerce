import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CustomButton from "../../../../components/Button/CustomButton";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OrderInfoCard from "../../../../components/OrderInfoCard";
import PaymentInfoCard from "../PaymentInfoCard";
import Note from "../Note";

function OrderDetailsbody() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Stack
      gap={1}
      p={2}
      sx={{ backgroundColor: "white", borderRadius: "15px" }}
    >
      <Stack direction={"row"} gap={3}>
        <Box sx={{ fontSize: "18px", fontWeight: "700" }}>Orders ID: #6735</Box>
        <Box
          sx={{
            backgroundColor: "rgb(255,183,89)",
            padding: "5px",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "6px",
          }}
        >
          Pending
        </Box>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
          <CalendarMonthIcon />
          &nbsp; Feb 16,2022 - Feb 20,2022
        </Box>
        <Stack direction={"row"} gap={2} alignItems={'center'}>
          <Box sx={{ minWidth: 220, }}>
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
          <Button variant="contained" sx={{ width: "70px", height: "38px" }}>
            <LocalPrintshopOutlinedIcon />
          </Button>
          <CustomButton
            handleClick={() => {}}
            color="primary"
            variant="contained"
            title="Save"
          />
        </Stack>
      </Stack>
      <Box display={"flex"} gap={2} flexWrap={"wrap"} marginTop={2}>
        <OrderInfoCard
          icon={<PersonOutlinedIcon sx={{ fontSize: "35px" }} />}
          header={"Customer"}
          line1={"Full Name : user@gmail.com"}
          line2={" Name : user@gmail.com"}
          line3={"Phone : 9324292424"}
        />
        <OrderInfoCard
          icon={<ShoppingBagOutlinedIcon sx={{ fontSize: "35px" }} />}
          header={"Order Info"}
          line1={"Shipping: Next Express"}
          line2={"Payment Method: Paypal"}
          line3={"Status: Pending"}
        />
        <OrderInfoCard
          icon={<ShoppingBagOutlinedIcon sx={{ fontSize: "35px" }} />}
          header={"Deliver to"}
          line1={"Address: line1"}
          line2={"Address: line2"}
          line3={"Address: line3"}
        />
      </Box>
      <Stack direction={"row"} gap={2} marginTop={2}>
        <PaymentInfoCard />
        <Note />
      </Stack>
    </Stack>
  );
}

export default OrderDetailsbody;
