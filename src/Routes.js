import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PromptPage from "./components/PromptPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prompt" element={<PromptPage />} />
    </Routes>
  );
}

export default AppRoutes;
