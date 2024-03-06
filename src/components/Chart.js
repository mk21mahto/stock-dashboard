import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Chart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with actual labels
    datasets: [
      {
        label: 'Portfolio Value',
        data: [1000, 1200, 800, 1500, 1100], // Replace with actual data
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div> 
      <Line
        data={data}
      />
  </div>
  )
}

export default Chart