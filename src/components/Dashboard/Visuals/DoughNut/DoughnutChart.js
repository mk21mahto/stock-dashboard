import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip
} from 'chart.js'
import useDoughNutData from './useDoughNutData';
ChartJS.register(
  ArcElement,
  Tooltip
);

const DoughnutChart = () => {
  const [view, setView] = useState('Assets');
  const { assetLabel, individualLabel, assetData, individualData } = useDoughNutData();

  const portfolioData = view === 'Assets' ? assetData : individualData;
  const labels = view === 'Assets' ? assetLabel : individualLabel;

  const data = {
    labels: labels,
    datasets: [
      {
        data: portfolioData,
        backgroundColor: [
          'rgb(55, 154, 230)',
          'rgb(17, 180, 221)',
          'rgb(43, 125, 180)',
          'rgb(17, 180, 221)',
          'rgb(92, 170, 218)',
          'rgb(26, 139, 239)',
          'rgb(107, 201, 244)',
          'rgb(4, 89, 174)',
          'rgb(168, 192, 244)',
          'rgb(47, 50, 228)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const onOptionChange = (e) => {
    setView(e.target.value);
  };

  return (
    <div data-testid="doughnut-chart" className="grid-span-4">
      <div className="flex flex-wrap my-5">
        <div className="flex items-center me-4">
          <input
            id="assets"
            type="radio"
            value="Assets"
            checked={view === 'Assets'}
            name="view"
            className="w-4 h-4"
            onChange={onOptionChange}
          />
          <label htmlFor="assets" className="ms-2 text-sm font-medium">
            Assets
          </label>
        </div>
        <div className="flex items-center me-4">
          <input
            id="individual"
            type="radio"
            value="Individual"
            checked={view === 'Individual'}
            name="view"
            className="w-4 h-4"
            onChange={onOptionChange}
          />
          <label htmlFor="individual" className="ms-2 text-sm font-medium">
            Individual
          </label>
        </div>
      </div>
      <div className="h-72 mx-16">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
