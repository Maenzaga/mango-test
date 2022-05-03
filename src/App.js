import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Exercise1 from "./pages/Exercise1/Exercise1";
import Exercise2 from "./pages/Exercise2/Exercise2";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/exercise1" element={<Exercise1 />} />
        <Route exact path="/exercise2" element={<Exercise2 />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
