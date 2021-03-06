import React from "react";
import { Doughnut } from "react-chartjs-2";

function RegionChart({ data, reducer }) {

  const getCityData = (city, dose) => {
    let cityArray = data.filter(
      (round) => round.REGION === city && round.DOSE === dose
    );
    return cityArray;
  };

  const BrusselsFirstDose = getCityData("Brussels", "A").reduce(reducer, 0);
  const BrusselsSecondDose = getCityData("Brussels", "B").reduce(reducer, 0);
  const WallionaFirstDose = getCityData("Wallonia", "A").reduce(reducer, 0);
  const WallionaSecondDose = getCityData("Wallonia", "B").reduce(reducer, 0);
  const FlandersFirstDose = getCityData("Flanders", "A").reduce(reducer, 0);
  const FlandersSecondDose = getCityData("Flanders", "B").reduce(reducer, 0);
  const OstbelgienFirstDose = getCityData("Ostbelgien", "A").reduce(reducer, 0);
  const OstbelgienSecondDose = getCityData("Ostbelgien", "B").reduce(reducer, 0);

  const DoughnutChart = (color1, color2, firstDose, SecondDose, region) => {
    return (
      <Doughnut
        data={{
          labels: ["dose 1", "dose2"],
          datasets: [
            {

              backgroundColor: [color1, color2],
              data: [firstDose, SecondDose],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: {
            display: true,
            text: `Total vaccinated population in ${region}: ${
              firstDose + SecondDose
            }`,
          },
        }}
      />
    );
  };

  return (
    <div className="doughnut-chart-container">
      <div className="doughnut-chart">
        {DoughnutChart(
          "#add2c9",
          "#5ea3a3",
          BrusselsFirstDose,
          BrusselsSecondDose,
          "Brussels"
        )}
      </div>

      <div className="doughnut-chart">
        {DoughnutChart(
          "#BDE284",
          "#84C77A",
          WallionaFirstDose,
          WallionaSecondDose,
          "Wallonia"
        )}
      </div>

      <div className="doughnut-chart">
        {DoughnutChart(
          "#BDE284",
          "#84C77A",
          FlandersFirstDose,
          FlandersSecondDose,
          "Flanders"
        )}
      </div>

      <div className="doughnut-chart">
        {DoughnutChart(
          "#add2c9",
          "#5ea3a3",
          OstbelgienFirstDose,
          OstbelgienSecondDose,
          "Ostbelgien"
        )}
      </div>
    </div>
  );
}

export default RegionChart;
