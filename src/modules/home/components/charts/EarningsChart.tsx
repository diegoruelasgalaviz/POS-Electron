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

const EarningsChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Earnings',
      data: [1000, 1300, 1800, 2500, 2600, 3000],
      fill: false,
      borderColor: 'rgb(75, 192, 75)',
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
        text: 'Monthly Earnings'
      },
    },
  };

  return (
    <div className="chart-container">
      <Typography variant="h6">Earnings Overview</Typography>
      <Line data={data} options={options} />
    </div>
  );
};

export default EarningsChart;