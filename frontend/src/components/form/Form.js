import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './form.css'

export default function Form({formData, setFormData}) {

  const handleChange = (e) => {
    const name = e.target.name
    let value  = e.target.value

    console.log(name)
    console.log(value)
    setFormData({...formData,[name]:value})
  }


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={handleChange}
          name='description'
          value={formData.description}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={20}
          defaultValue="Paste all descriptions here..."
        />
      </div>
    </Box>
  );
}
