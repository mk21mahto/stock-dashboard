import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { monthlyMockData } from '../../../../mock/getMonthlyMock';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const getAssetValues = (asset) => {
  return Object.keys(monthlyMockData).map(month => {
    const assetData = monthlyMockData[month].find(data => data.asset === asset);
    return assetData ? assetData.price : null;
  });
};

const getLabel = (months) => {
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return monthLabels.slice(-months);
};

const Chart = () => {
  const [months, setMonths] = useState('12');
  const [asset, setAsset] = useState('All Assets');
  const values = getAssetValues(asset).slice(-months);

  const data = {
    labels: getLabel(months),
    datasets: [
      {
        label: 'Portfolio Value',
        data: values,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const handleFilterChange = (selectedFilter, select) => {
    select ? setAsset(selectedFilter) : setMonths(selectedFilter);
  };

  return (
    <div className='grid-span-4 my-5 mx-20'>
      <div className='flex flow-root'>
        <div className='float-left'>
          <select onChange={(e) => handleFilterChange(e.target.value, true)}>
            {monthlyMockData.Jan.map(data => (
              <option key={data.asset} value={data.asset}>
                {data.asset}
              </option>
            ))}
          </select>
        </div>
        <div className='float-right'>
          <select onChange={(e) => handleFilterChange(e.target.value, false)}>
            <option value="12">12 months</option>
            <option value="6">6 months</option>
            <option value="3">3 months</option>
          </select>
        </div>
      </div>
      <div className='h-72 my-5'>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Chart;
