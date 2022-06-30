import './App.css';
import { useState } from 'react';
import MenuAppBar from './components/appbar/MenuAppBar';
import Home from './components/home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const [theme,setTheme] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode: theme?"light":"dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={theme?"App-light":"App-dark"}>
      <MenuAppBar setTheme={setTheme} theme={setTheme}/>
      <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
