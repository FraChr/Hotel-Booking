import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/navigation/navigation";
import Home from "./components/Pages/Home";
import Overnatting from "./components/Pages/Overnatting";
import Meetings from "./components/Pages/Meetings";
import Selskap from "./components/Pages/Selskap";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overnatting" element={<Overnatting />} />
        <Route path="/meeting" element={<Meetings />} />
        <Route path="/selskap" element={<Selskap />} />
      </Routes>
    </Router>
  );
}

export default App;
