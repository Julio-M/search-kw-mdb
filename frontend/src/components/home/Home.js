import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Form from '../form/Form';
import Filters from '../filters/Filters';
import Button from '@mui/material/Button';
import StickyHeadTable from '../table/StickyHeadTable';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home({setTheme,theme}) {

  const [formData,setFormData] = useState({
    "description":""
  })

  const [data,setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    fetch(`http://0.0.0.0:8000/description/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then( res => res.json())
    .then( mydata => setData(mydata))
    .catch( error => console.log(error.message));
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={12} sm={12} xs={12}>
        <Filters/>
      </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <form onSubmit={handleSubmit}>
          <Form formData={formData} setFormData={setFormData}/>
          <Button variant="contained" type='submit'>Submit</Button>
          </form>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StickyHeadTable data={data}/>
        </Grid>
      </Grid>
    </Box>
  );
}
