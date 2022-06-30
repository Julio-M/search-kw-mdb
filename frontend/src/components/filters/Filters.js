import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './filters.css'

export default function Filters() {
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
        <Button>Programming languages</Button>
        <Button>Web frameworks</Button>
        <Button>Query languages</Button>
        <Button>Database Managment</Button>
      </ButtonGroup>
    </Box>
  );
}
