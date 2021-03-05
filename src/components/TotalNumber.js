import React from "react";
import CountUp from "react-countup";

function TotalNumber({ data, reducer }) {

  const getDoseData = (dose) => {
    let doseArray = data.filter((round) => round.DOSE === dose);
    return doseArray;
  };

  const FirstDosePeople = getDoseData("A").reduce(reducer, 0);
  const SecondDosePeople = getDoseData("B").reduce(reducer, 0);

  return data ? (
    <div className="container-totalNum">
      <div className="board">
        <h3>Overall Vaccinated Population</h3>
        <CountUp
          className="count-up"
          start={0}
          end={FirstDosePeople + SecondDosePeople}
          duration={4}
          separator=","
        />
      </div>
      <div className="board">
        <h3>People with first dose</h3>
        <CountUp
          className="count-up"
          start={0}
          end={FirstDosePeople}
          duration={4}
          separator=","
        />
      </div>
      <div className="board">
        <h3>People with second dose</h3>
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
