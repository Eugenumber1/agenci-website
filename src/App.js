//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Process } from "./pages/Process";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="main-design">
      <div className="div">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="process" element={<Process />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
