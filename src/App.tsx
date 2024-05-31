import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import MultiLLMPromptCreation from "./pages/MultiLLMPromptCreation";
import AgentPromptGenerator from "./pages/AgentPromptGenerator";
import WebAppBuilder from "./pages/WebAppBuilder";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/multi-llm-prompt-creation" element={<MultiLLMPromptCreation />} />
        <Route path="/agent-prompt-generator" element={<AgentPromptGenerator />} />
        <Route path="/web-app-builder" element={<WebAppBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;