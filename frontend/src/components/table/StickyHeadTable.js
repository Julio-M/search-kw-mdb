import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './table.css'
import CircularProgress from '@mui/material/CircularProgress';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function StickyHeadTable({data}) {
  return (
    <div>
    <Paper className="container">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell numeric>Count</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length>0?data.map((d) => (
            <TableRow key={d.word} sx={{wordWrap:'break-word'}}>
              <TableCell component="th" scope="row">
                {d.word}
              </TableCell>
              <TableCell numeric>{d.count}</TableCell>
              <TableCell component="th" scope="row" style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }}>
                {d.notes?<>
                  <p style={{"font-style": "italic"}}>The word {d.word} might be referring to this:</p>
                  <h4 style={{"border":"solid 1px"}}>{d.language}</h4>
                  <a href={d.notes}>{d.notes}</a>
                </>:"N/A"}
              </TableCell>
            </TableRow>
          )):<div className='nodata'>No data</div>}
          {!data?<div className='loading'><CircularProgress disableShrink size={80}/></div>:null}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}