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

const initialState = {
  "description":""
}

export default function Home({setTheme,theme}) {


  const [formData,setFormData] = useState(initialState)

  const [isLoading, setIsLoading] = useState(false)

  const [data,setData] = useState([])

  const getData = (url) => {
    fetch(`${url}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then( res => {
    if (res.ok){
      return res.json()
    } else {
      console.log(res)
    }
  })
  .then( mydata => setData(mydata))
  .catch( error => console.log(error.message));

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(!isLoading)
    setData("")
    getData('description/')
  }

  const handleClear = (e) => {
    setFormData(initialState)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={12} sm={12} xs={12}>
        <Filters setData={setData} formData={formData} getData={getData} data={data}/>
      </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <form onSubmit={handleSubmit}>
          <Form formData={formData} setFormData={setFormData}/>
          <Button variant="contained" type='submit'>Submit</Button>
          <Button onClick={handleClear} sx={{"marginLeft":"1rem;"}} variant="outlined" color="error" >Clear</Button>
          </form>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StickyHeadTable data={data} isLoading={isLoading}/>
        </Grid>
      </Grid>
    </Box>
  );
}
