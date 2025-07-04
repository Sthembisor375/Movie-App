import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
