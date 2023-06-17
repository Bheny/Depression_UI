import { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentPage from "./pages/dashboard/StudentPage";
import StudentContent from "./contents/StudentContent";
import DashboardPageLayout from "./layouts/Dashboard";
import QuestionnairePage from "./pages/dashboard/QuestionairePage";
import ImageAnalysis from "./pages/dashboard/ImageAnalysis";
import AssessmentResultsPage from "./pages/dashboard/AssessmentResultsPage";

// import ContactPage from './components/ContactPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPageLayout />}>
          <Route path="" element={<StudentPage />} />
          <Route path="questionaire" element={<QuestionnairePage />} />
          <Route path="analysis" element={<ImageAnalysis />} />
          <Route path="assessment" element={<AssessmentResultsPage />} />
        </Route>
      
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
