import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/header.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";


// js //
import "./vanilla-js/index";
import "./vanilla-js/functions";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/about" element = {<About />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </Router>
  )
}

export default App
