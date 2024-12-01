import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GenerateQRCode from "./components/GenerateQRCode";
import DecodeQRCode from "./components/DecodeQRCode";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GenerateQRCode />} />
        <Route path="/decode" element={<DecodeQRCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
