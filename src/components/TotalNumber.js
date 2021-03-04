import React from "react";
import CountUp from "react-countup";

function TotalNumber({ data }) {

  const reducer = (acc, cur) => {
    return acc + cur.COUNT;
  };

  const totalVaccinatedPeople = data.reduce(reducer, 0);


    const FirstDoseArray = data.filter((round) => round.DOSE === "A");
   // console.log(FirstDoseArray)

    const FirstDosePeople = FirstDoseArray.reduce(reducer, 0)
    //console.log(FirstDosePeople)
    
    const SecondDosePeople = totalVaccinatedPeople - FirstDosePeople

  return (
    <div>
        <div>
        <h3>Overall Vaccinated Population</h3>
      <CountUp start={0} end={totalVaccinatedPeople} duration={4} separator="," />
      </div>
      <div>
          <h3>People with first dose</h3>
          <CountUp start={0} end={FirstDosePeople} duration={4} separator="," />


      </div>
      <div>
          <h3>People with second dose</h3>
          <CountUp start={0} end={SecondDosePeople} duration={4} separator="," />

      </div>
    </div>
  );
}

export default TotalNumber;
