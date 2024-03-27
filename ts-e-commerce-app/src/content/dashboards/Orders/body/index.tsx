import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Checkbox, Divider, Pagination, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type orderlist = {};

export default function OrderList(rows: orderlist) {
  
  const navigate = useNavigate()

  return (
    <Box>
      <TableContainer component={Paper} sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: "600", pb: 1.5 }}>
          Recent Purchases
        </Typography>
        <Divider />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={rowCount > 0 && numSelected === rowCount}
                  // onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all products",
                  }}
                />
              </TableCell>
              <TableCell align="left" sx={{color: '#6e6f6f', fontWeight: '600'}}>Product</TableCell>
              <TableCell align="center" sx={{color: '#6e6f6f', fontWeight: '600'}}>Order ID</TableCell>
              <TableCell align="center" sx={{color: '#6e6f6f', fontWeight: '600'}}>Date</TableCell>
              <TableCell align="left" sx={{color: '#6e6f6f', fontWeight: '600'}}>Customer Name</TableCell>
              <TableCell align="center" sx={{color: '#6e6f6f', fontWeight: '600'}}>Status</TableCell>
              <TableCell align="right" sx={{color: '#6e6f6f', fontWeight: '600'}}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows?.map((row) => ( */}
            <TableRow
              // key={row.name}
            onClick={() => navigate('/vendor/orders/orderdetails')}
            sx={{cursor: 'pointer'}}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={rowCount > 0 && numSelected === rowCount}
                  // onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all products",
                  }}
                />
              </TableCell>
              <TableCell align="left">ProductName</TableCell>
              <TableCell align="center">#Order</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="left" sx={{display: 'flex', alignItems: 'center'}}>
              <Avatar sx={{width: "30px", height: "30px", mr: 2}} />
                Name
              </TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">₹1000</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        hidePrevButton
        sx={{
          mt: 4,
          ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root": {
            "&:active": {
              color: "white",
              bgcolor: "black",
            },
          },
        }}
      />
    </Box>
  );
}
