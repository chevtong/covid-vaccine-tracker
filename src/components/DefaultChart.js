import React from 'react'
import { Line } from "react-chartjs-2";


function DefaultChart({data, getDoseData}) {
    
    const dateArray = data.map((round) => round.DATE)
    const FirstDoseArray = getDoseData("A");
    const SecondDoseArray = getDoseData("B");

    const removeDuplicate = (array) =>{
        return array.filter((value,index) => array.indexOf(value) === index)
    }


const getCountPerDay = (doseArray) =>{
    const newArray = doseArray.reduce((acc, item) => ({
        ...acc,
        [item.DATE]: (acc[item.DATE] || 0) + item.COUNT
      }) , {})

      const countArray = Object.keys(newArray).map(key => ({date: key, count: newArray[key]}))

      return countArray

}





    return (
        <div className="default-chart">
           <Line
            data={{
                labels: removeDuplicate(dateArray),
                datasets: [{
                    data:getCountPerDay(FirstDoseArray).map((day) => (day.count)),
                    label: "Dose 1",
                    borderColor: '#5ea3a3', 
                    backgroundColor: '#add2c9',
                    fill:true,
                },{
                    data:getCountPerDay(SecondDoseArray).map((day) => (day.count)),
                    label: "Dose 2",
                    borderColor: '#404969', 
                    backgroundColor: '#bde4f4',
                    fill:true
                }]
            }}
            options={{
               // animation: {display: true,duration: 2000},
                legend: { display: true },
                title: {
                  display: true,
                  text: "Vaccinated People According To Dates",
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + 'persons';
                            }
                        }
                    }]
                }
            
              }}
        />
        </div>
    )
}

export default DefaultChart
