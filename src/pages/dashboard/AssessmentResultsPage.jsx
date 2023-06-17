import React from 'react';

const AssessmentResultsPage = () => {
  // Dummy data for demonstration
  const assessmentResults = [
    {
      date: '2023-06-10',
      score: 75,
      progress: 0.75,
    },
    {
      date: '2023-06-05',
      score: 82,
      progress: 0.82,
    },
    {
      date: '2023-06-01',
      score: 68,
      progress: 0.68,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
    <div className="p-4 bg-white rounded-lg w-full h-screen">
      <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>

      {assessmentResults.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {assessmentResults.map((result, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-md flex flex-col items-center"
            >
              <p className="text-lg font-semibold">{result.date}</p>
              <p className="text-4xl font-bold mb-2">{result.score}%</p>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: `${result.progress * 100}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2">
                Progress: {(result.progress * 100).toFixed(0)}%
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">No assessment results available.</p>
      )}
    </div>
    </div>
  );
};

export default AssessmentResultsPage;
