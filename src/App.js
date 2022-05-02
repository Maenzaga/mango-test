import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Exercise1 from "./components/exercise1/exercise1";
import Exercise2 from "./components/Exercise2/Exercise2";
import Home from "./components/Home/Home";

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
