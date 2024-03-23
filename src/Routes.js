import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PromptPage from "./components/PromptPage";
import PlanPage from "./components/PlanPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prompt" element={<PromptPage />} />
      <Route path="/plan" element={<PlanPage />} />
    </Routes>
  );
}

export default AppRoutes;
