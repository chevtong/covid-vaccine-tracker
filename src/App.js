import './App.css';
import React, {useEffect, useState} from 'react'
import Selections from './components/Selections';
import Chart from "./components/Chart";
import TotalNumber from "./components/TotalNumber";
import { FetchAPI } from "./components/FetchAPI";

function App() {

  const[data, setData] = useState([])

  useEffect(() => {
    const fetching = async () => {
      setData(await FetchAPI())
    };
    fetching()
  }, []);

  

  return (
    <div className="App">
     <h1>Vaccine Progress in Belgium</h1>
      <TotalNumber data={data}/>
      <Selections/>
      <Chart data={data}/>
    </div>
  );
}

export default App;
