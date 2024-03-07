import React, {useState} from 'react'
import { Line } from 'react-chartjs-2'
import { monthlyMockData} from './MockData'
import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const getAssetValues = (asset) => {
  const assetValues = Object.keys(monthlyMockData).map(month => {
      const assetData = monthlyMockData[month].find(data => data.asset === asset);
      return assetData ? assetData.price : null;
  });

  return assetValues;
};

const getLabel = (months) => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return month.splice(-months)
}
const Chart = () => {
  const [months, setMonths] = useState('12');
  const [ asset, setAsset] = useState('All')
  const values = getAssetValues(asset).splice(-months);
console.log(values)
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
    <div className='my-5 mx-20'> 
      <select onChange={(e) => handleFilterChange(e.target.value, true)}>
        <option value="All">All Assets</option>
        <option value="AAPL">12 months</option>
        <option value="6">6 months</option>
        <option value="3">3 months</option>
      </select>
      <select onChange={(e) => handleFilterChange(e.target.value, false)}>
        <option value="12">12 months</option>
        <option value="6">6 months</option>
        <option value="3">3 months</option>
      </select>
      <Line
        data={data}
      />
  </div>
  )
}

export default Chart