import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

import "./App.css";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
