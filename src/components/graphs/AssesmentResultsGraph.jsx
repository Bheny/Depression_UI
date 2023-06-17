import React from 'react';
import { Bar } from 'react-chartjs-2';

const AssessmentResultsGraph = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Assessment Scores',
        data: data.scores,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Scores',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Assessments',
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default AssessmentResultsGraph;
