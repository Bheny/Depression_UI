import React, { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs'; // Import TensorFlow.js dependencies
import model from '../tm-my-image-model/model.json'; // Import the model.json file
import weights from '../tm-my-image-model/weights.bin'; // Import the model weights file(s)

const CameraComponent = () => {
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const loadModel = async () => {
    const modelUrl = '../tm-my-image-model/model.json';
    // const loadedModel = await tf.loadLayersModel(model); // Load the model
    const loadedModel = await tf.loadLayersModel(modelUrl, { weightPathPrefix: '../tm-my-image-model/weights.bin' });
    // await loadedModel.loadWeights(weights); // Load the model weights
    // Use the loaded model for predictions or further processing
  };
  
  useEffect(() => {
    loadModel(); // Call the loadModel function when the component mounts
  }, []);
  
  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default CameraComponent;
