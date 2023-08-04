import "./App.css";
import { AppBar } from "./AppBar";
import { SpaceMovies } from "./SpaceMovies";
import { Routes, Route, Link } from "react-router-dom";
import { RealityMovies } from "./RealityMovies";
import { TimeMovies } from "./TimeMovies";
import { PowerMovies } from "./PowerMovies";
import { SoulMovies } from "./SoulMovies";
import { MindMovies } from "./MindMovies";

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space-movies" element={<SpaceMovies />} />
        <Route path="/reality-movies" element={<RealityMovies />} />
        <Route path="/time-movies" element={<TimeMovies />} />
        <Route path="/power-movies" element={<PowerMovies />} />
        <Route path="/soul-movies" element={<SoulMovies />} />
        <Route path="/mind-movies" element={<MindMovies />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="home cursor-pointer">
      <img
        className="w-full object-cover fixed"
        src="https://i.ytimg.com/vi/SdHe-JseJfQ/maxresdefault.jpg"
        alt=""
      />
    </div>
  );
}

export default App;
