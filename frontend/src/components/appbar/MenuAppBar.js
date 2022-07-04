import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './menuappbar.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function MenuAppBar({theme,setTheme}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} onChange={()=>setTheme((theme)=>!theme)} label="Switch Mode"/>
            </FormGroup>
          </IconButton>
          <Typography id="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KeyWords
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}