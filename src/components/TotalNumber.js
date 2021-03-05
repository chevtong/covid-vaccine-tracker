import React from "react";
import CountUp from "react-countup";

function TotalNumber({
  data,
  reducer,
  firstDoseData,
  secondDoseData,
  totalVaccinatedPeople,
}) {
  const FirstDosePeople = firstDoseData.reduce(reducer, 0);

  const SecondDosePeople = secondDoseData.reduce(reducer, 0);

  return data ? (
    <div className="container-totalNum">
      <div className="board">
        <h3>Overall Vaccinated Population</h3>
        <CountUp
        className="count-up"
          start={0}
          end={totalVaccinatedPeople}
          duration={4}
          separator=","
        />
      </div>
      <div className="board">
        <h3>People with first dose</h3>
        <CountUp className="count-up" start={0} end={FirstDosePeople} duration={4} separator="," />
      </div>
      <div className="board">
        <h3>People with second dose</h3>
        <CountUp className="count-up" start={0} end={SecondDosePeople} duration={4} separator="," />
        
      </div>
    </div>
  ) : null;
}

export default TotalNumber;
