import './App.css';
import { useState } from 'react';

function App() {

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
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name='description' value={formData.description}></input>
      <button type='submit'>Submit</button>
    </form>
    </div>
  );
}

export default App;
