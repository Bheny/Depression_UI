import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs'; // Import TensorFlow.js dependencies
import model from '../tm-my-image-model/model.json'; // Import the model.json file
import weights from '../tm-my-image-model/weights.bin'; // Import the model weights file(s)
import Webcam from 'react-webcam'; // Import the camera library (e.g., react-webcam)

const Camera = () => {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const captureImage = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    };

    useEffect(() => {
      const loadModel = async () => {
        await tf.setBackend('webgl'); // Set the backend to use WebGL for better performance
        const loadedModel = await tf.loadLayersModel(model);
        await loadedModel.loadWeights(weights);
        // Start the camera once the model is loaded
        startCamera();
      };
  
      const startCamera = () => {
        // Access the camera stream using the webcamRef
        const webcam = webcamRef.current.video;
        // Run the model inference on each frame of the camera stream
        setInterval(() => {
          predict(webcam);
        }, 100); // Adjust the interval (in milliseconds) based on your needs
      };
  
      loadModel(); // Call the loadModel function when the component mounts
    }, []);
  
    const predict = async (video) => {
      // Preprocess the video frame if required using TensorFlow.js methods
      // Example: Convert the video frame to a tensor
      const frame = tf.browser.fromPixels(video);
      const processedFrame = preprocess(frame); // Custom preprocessing function
    
      // Run the model.predict() method on the preprocessed video frame
      const predictions = await model.predict(processedFrame);
    
      // Process and display the prediction results as desired
      processPredictions(predictions); // Custom function to process predictions
    };
    
    const preprocess = (frame) => {
      // Implement any required preprocessing steps
      // Example: Resize the frame to match the input size required by the model
      const resizedFrame = tf.image.resizeBilinear(frame, [224, 224]);
    
      // Normalize the pixel values to a specific range, if required
      const normalizedFrame = resizedFrame.div(255);
    
      // Add any other preprocessing steps based on the model's requirements
    
      return normalizedFrame;
    };

    const displayPredictionResults = (classLabel, confidenceScores) => {
      // Display the prediction class label and confidence scores in the UI
      console.log("Predicted class label:", classLabel);
      console.log("Confidence scores:", confidenceScores);
    
      // Customize the UI display based on your application's requirements
      // For example, update the state variables or components to show the prediction results
    };
    
    
    const processPredictions = (predictions) => {
      // Process the prediction results based on your specific model and task
      // Example: Retrieve the predicted class label and confidence scores
      const classLabel = predictions.argMax().dataSync()[0];
      const confidenceScores = predictions.dataSync();
    
      // Perform any further processing or post-processing steps as needed
    
      // Display the prediction results or update the UI accordingly
      displayPredictionResults(classLabel, confidenceScores); // Custom function to display results
    };
    
    return (
      <div>
        <Webcam ref={webcamRef} />
        {/* Additional camera-related UI components can be added here */}
        {capturedImage && <img src={capturedImage} alt="Captured" />}
      <button onClick={captureImage}>Capture Image</button>

      <p>
        class: {clas}
        score : {confidenceScores}
      </p>
      </div>
    );
  };
  
  export default Camera;
  