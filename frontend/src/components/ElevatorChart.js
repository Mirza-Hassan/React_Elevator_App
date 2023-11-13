import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/ElevatorChart.css';

const ElevatorChart = ({ chartData }) => {
  const formattedChartData = {
    labels: chartData.map(item => new Date(item.time).toLocaleDateString()),
    datasets: [
      {
        label: 'Door Cycle Count',
        data: chartData.map(item => item.door_cycles_count),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return  <div className="chart-container">
          <Line data={formattedChartData} />
        </div>
};

export default ElevatorChart;
