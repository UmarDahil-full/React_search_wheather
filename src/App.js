import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import { useState } from 'react';
import { API, KEY } from './config';
import Output from './components/Output/Output';

function App() {
  const [data, setData] = useState()
  const [val, setVal] = useState('')

  const searchWeatherByCity = async(event)=>{
    event.preventDefault()
     let url = API+val+KEY
    const req = await fetch(url)
    const res= await req.json()
    console.log(res) 
    setData(res)
  }


  return (
    <>
  <Form
    val={val}
  setVal={setVal}
  search={searchWeatherByCity}
  />
  <Output
    weather={data}
  />






    </>
  );
}

export default App;
