import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Pagination from '@mui/material/Pagination';
import styles from './AlbumList.module.css';
import { Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from '@mui/material/IconButton';

 function AlbumList() {
  const rowsPerPage = 15; 
  const [page, setPage] = useState(1);
  const rows=[
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"}
    ,
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"},
    {name:"name",artist:"artist",duration:"duration"}
  ]
  // Calculate the index of the first and last row to display based on the current page
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Function to handle page change
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

   const handleBack=()=>{

   }

  return (
    <div className={styles.container}>
    <div className={styles.banner}>
      <div className={styles.icon}>
    <IconButton  onClick={handleBack} style={{backgroundColor: 'var(--secondary-color)',border:'1px solid var(--color-white)' }}>
      <KeyboardBackspaceIcon style={{color:'var(--color-white)'}}/>
      </IconButton>
      </div>
      <div className={styles.subbanner}>

      </div>
       </div>
    <div className={styles.list}>
    <Stack spacing={2} >
    <Pagination
        count={Math.ceil(rows.length / rowsPerPage)} // Calculate the total number of pages
        page={page}
        onChange={handlePageChange}
        className={styles.pagination}
        sx={{
          color: 'var(--color-white)',
          '& .MuiPaginationItem-root': {
            color: 'var(--color-white)',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--primary-color)',
            color: 'var(--color-white)',
          },
          '& .MuiPaginationItem-icon': {
            backgroundColor: 'var(--color-white)',
            color: 'var(--secondary-color)',
            borderRadius: '50%',
            fontSize: '2em',
            width: '1.5em'
          }
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Artist</TableCell>
              <TableCell align="center">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(startIndex, endIndex).map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.artist}</TableCell>
                <TableCell align="center">{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
     </Stack>
<div className={styles.headTitle}>
    <div></div>
    <div></div>
    <div></div>
</div>
    </div>
    </div>
  );
}


export default AlbumList;
