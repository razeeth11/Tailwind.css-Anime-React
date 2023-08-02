import "./App.css";
import { AppBar } from "./AppBar";
import { SpaceMovies } from "./SpaceMovies";
import { Routes, Route, Link } from "react-router-dom";
import { RealityMovies } from "./RealityMovies";

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space-movies" element={<SpaceMovies />} />
        <Route path="/reality-movies" element={<RealityMovies />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="home cursor-pointer">
      <img className="w-full object-cover fixed"
      src="https://i.ytimg.com/vi/SdHe-JseJfQ/maxresdefault.jpg" alt="" />
    </div>
  );
}

export default App;
