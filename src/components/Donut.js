import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS, ArcElement, Tooltip
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip
);

const Donut = () => {
  const data = {
    labels: [
      'Stocks',
      'Cryptocurrency',
      'Fiat'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }

  return (
    <div><Doughnut data={data}></Doughnut></div>
  )
}

export default Donut