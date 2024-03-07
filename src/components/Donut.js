import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Assets } from './mockData';
import {
  Chart as ChartJS, ArcElement, Tooltip
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip
);

const Donut = () => {

  const [view, setView] = useState('Assets')
  let result = []
  const sumByType = Assets.reduce((acc, asset) => {
    const index = acc.findIndex(item => item.type === asset.type);

    if (index === -1) {
        acc.push({ type: asset.type, sum: asset.amount });
    } else {
        acc[index].sum += asset.amount;
    }

    return acc;
}, []);


  const portfolioData = view === 'Assets' ? sumByType.map(item => item.sum) : Assets.map(asset => asset.amount)
  const labels = view === 'Assets' ?  Assets.map(asset => {
    if(!result.includes(asset.type)){
      result.push(asset.type)
    }
    return result
  }) : Assets.map(asset => {
      result.push(asset.name)
    return result
  })

  const data = {
    labels:labels[0],
    datasets: [{
      data: portfolioData,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }

  const onOptionChange = e => {
    setView(e.target.value)
  }

  return (
    <div className='my-5'>
      <Doughnut data={data} />
      <div className="flex flex-wrap">
        <div className="flex items-center me-4">
            <input id="assets" type="radio" value="Assets" checked={view === "Assets"} name="view" className="w-4 h-4" onChange={onOptionChange}/>
            <label htmlFor="assets" className="ms-2 text-sm font-medium">Assets</label>
        </div>
        <div className="flex items-center me-4">
            <input id="individual" type="radio" value="Individual" checked={view === "Individual"} name="view" className="w-4 h-4" onChange={onOptionChange}/>
            <label htmlFor="individual" className="ms-2 text-sm font-medium">Individual</label>
        </div>
      </div>
    </div>
  )
}

export default Donut