import React from "react";
import { Pie } from "react-chartjs-2";

function GenderChart({ data, reducer }) {
  const getGendereData = (gender) => {
    let genderArray = data.filter((round) => round.SEX === gender);
    return genderArray;
  };

  const male = getGendereData("M").reduce(reducer, 0);
  const female = getGendereData("F").reduce(reducer, 0);

  return (
    <div className="gender-chart-container">
      <Pie
        data={{
          labels: ["male", "female"],
          datasets: [
            {
              backgroundColor: ["#85DAF9", "#BDE284"],
              data: [male, female],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: {
            display: true,
            text: `Total vaccinated population in different genders`,
          },
        }}
      />{" "}
    </div>
  );
}

export default GenderChart;
