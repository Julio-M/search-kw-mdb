import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Form from '../form/Form';
import Filters from '../filters/Filters';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home({setTheme,theme}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={12} sm={12} xs={12}>
        <Filters/>
      </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Form/>
          <Button variant="contained">Submit</Button>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Item>2</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
