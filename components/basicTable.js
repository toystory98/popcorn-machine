import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';


export default function BasicTable({ params }) {
  return (
    <Box>
      <TableContainer component={Paper} style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableBody>
            <TableRow key="1" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <img src='/popcorn.png' style={{ height: '40px' }} />
              </TableCell>
              <TableCell align="right">ป็อปคอร์น</TableCell>
              <TableCell align="right"> 1 x {params.count}</TableCell>
            </TableRow>
            <TableRow key="2" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow key="3" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                รวม
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{params.count * 59}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link href="/checkout">
          <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4AA96C' }}> ยืนยัน </Button>
        </Link>
      </div>
    </Box>
  );
}
