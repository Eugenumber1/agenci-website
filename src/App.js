//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  console.log(window.location);
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/pricing":
      Component = Pricing;
      break;
    default:
      Component = Home;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  );
}

export default App;
