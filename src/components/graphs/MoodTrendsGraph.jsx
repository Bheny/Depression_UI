import React from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";

const MoodTrendsGraph = ({ moodData }) => {
  // Extracting mood ratings and dates from moodData
  const moodRatings = moodData.map((data) => data.rating);
  const dates = moodData.map((data) => data.date);

  // Creating the chart data object
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Mood Rating',
        data: moodRatings,
        backgroundColor: 'rgba(130, 166, 237, 0.5)',
        borderColor: 'rgba(130, 166, 237, 1)',
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(130, 166, 237, 1)',
      },
      {
        label: 'time',
        data: dates,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(130, 166, 237, 1)',
      },
    ],
  };

  // Configuration options for the chart
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Mood Rating',
        },
        min: 1,
        max: 5,
      },
    },
  };

  return (
   
      <Line data={chartData} options={chartOptions} />

  );
};

export default MoodTrendsGraph;
