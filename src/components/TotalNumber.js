import React from "react";
import CountUp from "react-countup";

function TotalNumber({ data,reducer, getDoseData}) {

  const FirstDosePeople = getDoseData("A").reduce(reducer, 0);
  const SecondDosePeople = getDoseData("B").reduce(reducer, 0);

  return data ? (
    <div className="container-totalNum">
      <div className="board overall">
        <h2>Overall Vaccinated Population</h2>
        <CountUp
          className="count-up "
          start={0}
          end={FirstDosePeople + SecondDosePeople}
          duration={4}
          separator=","
        />
      </div>
      <div className="board">
        <h3>Population received first dose</h3>
        <CountUp
          className="count-up"
          start={0}
          end={FirstDosePeople}
          duration={4}
          separator=","
        />
      </div>
      <div className="board">
        <h3>Population received second dose</h3>
        <CountUp
          className="count-up"
          start={0}
          end={SecondDosePeople}
          duration={4}
          separator=","
        />
      </div>
    </div>
  ) : null;
}

export default TotalNumber;
