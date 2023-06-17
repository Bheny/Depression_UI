import {React, useState} from "react";
import MoodTrendsGraph from "../../components/graphs/MoodTrendsGraph";
import AssessmentResultsGraph from "../../components/graphs/AssesmentResultsGraph";

const StudentPage = () => {
  const moodTrendData = [
    { rating: 3, date: '2023-06-01' },
    { rating: 4, date: '2023-06-02' },
    { rating: 5, date: '2023-06-03' },
    // Add more mood data objects as needed
  ];

  const assessmentData = {
    labels: ['Assessment 1', 'Assessment 2', 'Assessment 3'],
    scores: [85, 92, 78],
  };
  
  return (
    <>  
       <div className="container mx-auto py-8 px-4">
    <h2 className="text-3xl font-semibold mb-4">Welcome to Your Dashboard</h2>
    <p className="text-gray-600 mb-6">Here you can access an overview of your mental health data and navigate through various features.</p>
    {/* <!-- Add your dashboard content here --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* <!-- Card 1: Mood Trends --> */}
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Mood Trends</h2>
          <p className="text-gray-700 mb-2">Track and visualize your mood over time.</p>
          {/* <!-- Add mood trend chart or visualizations here --> */}
          <div className="h-1/2">
           <MoodTrendsGraph moodData={moodTrendData} />
          </div>


        </div>
      
        {/* <!-- Card 2: Assessment Results --> */}
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Assessment Results</h2>
          <p className="text-gray-700 mb-2">View your assessment scores and progress.</p>
          {/* <!-- Add assessment results and progress information here --> */}
          <div className="h-1/2">
          <AssessmentResultsGraph data={assessmentData}/>
          </div>
        </div>
      
        {/* <!-- Card 3: Recommendations --> */}
        <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">Recommendations</h2>
            <p className="text-gray-700 mb-2">Discover personalized recommendations and resources.</p>
            
            <div className="grid grid-cols-1  gap-4">
              {/* <!-- Recommendation 1 --> */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Recommendation Title</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed justo aliquam, mollis lacus quis, euismod nisi.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
          
              {/* <!-- Recommendation 2 --> */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Recommendation Title</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed justo aliquam, mollis lacus quis, euismod nisi.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
          
              {/* <!-- Recommendation 3 --> */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Recommendation Title</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed justo aliquam, mollis lacus quis, euismod nisi.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          </div>
          
      </div>
      
  </div>
    </>
  );
};

export default StudentPage;
