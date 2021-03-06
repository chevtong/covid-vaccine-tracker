import React from 'react'
import { Line } from "react-chartjs-2";


function DefaultChart({data, reducer}) {

//     const dateArray = data.filter(
//         (round) => round.REGION === city && round.DOSE === dose
//       );
//       return cityArray;

//       const dateArray = Array.from(new Set(addresses.map(a => a.id)))
//  .map(id => {
//    return addresses.find(a => a.id === id)
//  })

    const removeDuplicate = (array) =>{
        return array.filter((value,index) => array.indexOf(value) === index)
    }
let dateArray = data.map((round) => round.DATE)

let uniqueDateArray = removeDuplicate(dateArray)
console.log(uniqueDateArray)
console.log(uniqueDateArray.map((date) => date))



    return (
        <div>
           <Line
            data={{
                labels: [uniqueDateArray],
                datasets: [{
                    data: [90, 6, 808, 89, 78],//dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: '#3333ff', 
                    fill:true,
                },{
                    data: [90, 6, 808, 89, 78],//dailyData.map(({deaths}) => deaths),
                    label: "deaths",
                    borderColor: 'red', 
                    backgroundColor: 'rgba(255, 0,0, 0.5)',
                    fill:true
                }]
            }}
        />
        </div>
    )
}

export default DefaultChart
