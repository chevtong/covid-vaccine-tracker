import React, { useEffect, useState } from "react";

import Selections from "./components/Selections";
import RegionChart from "./components/RegionChart";
import TotalNumber from "./components/TotalNumber";
import { FetchAPI } from "./components/FetchAPI";
import AgeChart from "./components/AgeChart";
import GenderChart from "./components/GenderChart";
import DefaultChart from "./components/DefaultChart";

import "./App.css";
import vaccine from "./img/vaccine.png";

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
  const getDoseData = (dose) => {
    let doseArray = data.filter((round) => round.DOSE === dose);
    return doseArray;
  };

  return (
    <div className="App">

      <h1 className="landing-title">COVID Vaccination in Belgium</h1>

      <div className="landing-container">
        <TotalNumber data={data} reducer={reducer} getDoseData={getDoseData} />
        <img src={vaccine} alt="icon" />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#276678"
          fill-opacity="1"
          d="M0,224L40,208C80,192,160,160,240,133.3C320,107,400,85,480,69.3C560,53,640,43,720,32C800,21,880,11,960,26.7C1040,43,1120,85,1200,106.7C1280,128,1360,128,1400,128L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <Selections setCategory={setCategory} />

      {category === "all" ? (
        <DefaultChart data={data} getDoseData={getDoseData} />
      ) : null}

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
