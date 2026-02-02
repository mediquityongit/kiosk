import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRScreen from "./QRScreen";
import Register from "./Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRScreen />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
