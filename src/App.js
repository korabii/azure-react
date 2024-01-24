import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(()=>{
    getData()
  },[])

  const[data, setData] = useState();

  const getData = () => {
    axios.get("http://localhost:3123/")
    .then((res) => setData(res.data))
  }


  return (
    <div>
        <h1> hi</h1>
        
        <p>{data}</p>
    </div>
  );
}

export default App;
