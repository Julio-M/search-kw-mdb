import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './filters.css'
import { useState } from 'react';

export default function Filters({formData,setData, setUrl,getData}) {

  const handleClick = (e) => {
    let url = e.target.value 
    getData(url)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup orientation="hotizontal" variant="outlined" aria-label="outlined button group" id='size'>
        <Button>All</Button>
        <Button onClick={handleClick} value={`description/p_languages`}>Programming languages</Button>
        <Button onClick={handleClick} value={`test`} >Web frameworks</Button>
        <Button onClick={handleClick} value={`test1`} >Query languages</Button>
        <Button onClick={handleClick} value={`test2`} >Database Managment</Button>
      </ButtonGroup>
    </Box>
  );
}
