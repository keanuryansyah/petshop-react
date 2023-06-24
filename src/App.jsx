import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import "./css/Global.css";
import "./css/header.css";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Homepage />} />
        <Route path="/about" element ={<About />} />
      </Routes>
    </Router>
  )
}

export default App
