import React from "react";
import { Bar } from "react-chartjs-2";

function AgeChart({ data, reducer }) {
  const getAgeData = (age) => {
    let ageArray = data.filter((round) => round.AGEGROUP === age);
    return ageArray;
  };

  const age0 = getAgeData("0-17").reduce(reducer, 0);
  const age18 = getAgeData("18-34").reduce(reducer, 0);
  const age35 = getAgeData("35-44").reduce(reducer, 0);
  const age45 = getAgeData("45-54").reduce(reducer, 0);
  const age55 = getAgeData("55-64").reduce(reducer, 0);
  const age65 = getAgeData("65-74").reduce(reducer, 0);
  const age75 = getAgeData("75-84").reduce(reducer, 0);
  const age85 = getAgeData("85+").reduce(reducer, 0);

  return (
    <div>
      <Bar
        data={{
          labels: [
            "0-17",
            "18-34",
            "35-44",
            "45-54",
            "55-64",
            "65-74",
            "75-84",
            "85+",
          ],
          datasets: [
            {
             
              label: "Vaccinated Population",
              backgroundColor: [
                "#add2c9",
                "#5ea3a3",
                "#add2c9",
                "#5ea3a3",
                "#add2c9",
                "#5ea3a3",
                "#add2c9",
                "#5ea3a3",
              ],
              borderColor: [
              "#5ea3a3",
              "#add2c9",
              "#5ea3a3",
              "#add2c9",
              "#5ea3a3",
              "#add2c9",
              "#5ea3a3", "#add2c9"],
              data: [age0, age18, age35, age45, age55, age65, age75, age85],
              borderWidth: 2
            },
          ],
        }}
        options={{

          legend: { display: false },
          title: {
            display: true,
            text: "Vaccinated Population According To Age Groups In Belgium",
          },
      
        }}
      />
    </div>
  );
}

export default AgeChart;
