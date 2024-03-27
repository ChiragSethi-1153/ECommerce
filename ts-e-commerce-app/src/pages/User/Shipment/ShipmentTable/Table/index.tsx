import { Box, Divider, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const DelTable = () => {
  return (
    <div>
      <Box>
      <TableContainer component={Paper} sx={{ p: 1}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="left" sx={{color: '#6e6f6f', fontWeight: '600'}}>Date</TableCell>
              <TableCell align="center" sx={{color: '#6e6f6f', fontWeight: '600'}}>Location</TableCell>
              <TableCell align="center" sx={{color: '#6e6f6f', fontWeight: '600'}}>Distance</TableCell>
              <TableCell align="center" sx={{color: '#6e6f6f', fontWeight: '600'}}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {/* {rows?.map((row) => ( */}
            <TableRow
              // key={row.name}
            sx={{cursor: 'pointer'}}
            >
              <TableCell align="left">8/3/24</TableCell>
              <TableCell align="center">Texas</TableCell>
              <TableCell align="center">2134</TableCell>
              <TableCell align="center">Delayed</TableCell>
            </TableRow>
            <TableRow
              // key={row.name}
            sx={{cursor: 'pointer'}}
            >
              <TableCell align="left">8/3/24</TableCell>
              <TableCell align="center">Texas</TableCell>
              <TableCell align="center">2134</TableCell>
              <TableCell align="center">Delayed</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </div>
  )
}

export default DelTable
