import Layout from "@/components/layout";
import Home from "@/components/home/home";
import Results from "./components/results/results";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;
