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

  const [formData,setFormData] = useState({
    "description":""
  })

  const handleChange = (e) => {
    const name = e.target.name
    let value  = e.target.value

    console.log(name)
    console.log(value)
    setFormData({...formData,[name]:value})
  }

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
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={theme?"App-light":"App-dark"}>
      <MenuAppBar setTheme={setTheme} theme={setTheme}/>
      <Home/>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name='description' value={formData.description}></input>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
