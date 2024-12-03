import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CostsChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Costs',
      data: [2000, 2200, 2400, 2300, 2600, 2800],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Costs'
      },
    },
  };

  return (
    <div className="chart-container">
      <Typography variant="h6">Costs Overview</Typography>
      <Line data={data} options={options} />
    </div>
  );
};

export default CostsChart;