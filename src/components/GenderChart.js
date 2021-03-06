import React from 'react'
import { Pie } from "react-chartjs-2";


function GenderChart({data, reducer}) {

    const getGendereData = (gender) => {
        let genderArray = data.filter((round) => round.SEX === gender);
        return genderArray;
      };

    const male = getGendereData("M").reduce(reducer, 0);
    const female = getGendereData("F").reduce(reducer, 0);
    console.log(male, female)
    return (
        <div>
 <Pie
        data={{
          labels: ["male", "female"],
          datasets: [
            {
              backgroundColor: ['#488b8f', '#add2c9'],
              data: [male, female],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: {
            display: true,
            text: `Total vaccinated population in different genders}`,
          },
        }}
      />        </div>
    )
}

export default GenderChart
