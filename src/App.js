import "./App.css";
import React, { useEffect, useState } from "react";
import Selections from "./components/Selections";
import Chart from "./components/Chart";
import TotalNumber from "./components/TotalNumber";
import {
  FetchAPI,
  fetchFirstDoseData,
  fetchSecondDoseData,
} from "./components/FetchAPI";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetching = async () => {
      setData(await FetchAPI());
    };
    fetching();
  }, []);

  const reducer = (acc, cur) => {
    return acc + cur.COUNT;
  };

  return (
    <div className="App">
      <h1>Vaccine Progress in Belgium</h1>
      <TotalNumber data={data} reducer={reducer} />
      <Selections setCategory={setCategory} />
      <Chart data={data} reducer={reducer} />
    </div>
  );
}

export default App;
