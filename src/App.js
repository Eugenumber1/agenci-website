//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Process from "./pages/Process";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="process" element={<Process />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
