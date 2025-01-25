"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DountChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets :[
            {
                label:'Banks',
                data:[1250,2500,3750],
                backgroundColor:['#ffa300','#ffb128','#ffe4b3']
            }
        ],
        labels:['SBI','IDBI','HDFC']
    }
  return <Doughnut 
  data={data}
  options={{
    cutout:'56%',
    plugins:{
        legend:{
            display:false
        }
    }
  }}
   />
  
}

export default DountChart