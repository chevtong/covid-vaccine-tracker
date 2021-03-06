import "./App.css";
import React, { useEffect, useState } from "react";
import Selections from "./components/Selections";
import RegionChart from "./components/RegionChart";
import TotalNumber from "./components/TotalNumber";
import { FetchAPI } from "./components/FetchAPI";
import AgeChart from "./components/AgeChart";
import GenderChart from "./components/GenderChart";

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

      {category === "region" ? (
        <RegionChart data={data} reducer={reducer} />
      ) : null}

      {category === "age" ? <AgeChart data={data} reducer={reducer} /> : null}

      {category === "gender" ? (
        <GenderChart data={data} reducer={reducer} />
      ) : null}
    </div>
  );
}

export default App;
