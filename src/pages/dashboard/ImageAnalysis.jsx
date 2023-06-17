import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';

const ImageAnalysis = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      setImageUrl(imageData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    // Set loading state to true
    setIsLoading(true);

    // Perform image analysis using your preferred method or API
    // Update the 'result' state with the analysis result
    // Simulating a delay of 2 seconds for demonstration
    setTimeout(() => {
      setResult('Depression detected');
      setIsLoading(false); // Set loading state to false after analysis is done
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="image/*"
        className="border rounded p-2"
        onChange={handleImageUpload}
      />

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="max-w-full h-auto rounded"
        />
      )}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center"
        onClick={analyzeImage}
        disabled={isLoading}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zm2-5.19V7.5a1.5 1.5 0 10-3 0v4.6l1.64.894L8 12.5z"
            ></path>
          </svg>
        ) : (
          <PlusIcon className="h-5 w-5" />
        )}
        Analyze Image
      </button>

      {result && <p className="text-xl">{result}</p>}
    </div>
  );
};

export default ImageAnalysis;
