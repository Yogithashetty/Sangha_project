import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Prantya from "./division/state";
import Vibhaga from "./division/vibhag";
import Bhag from "./division/bhag";
import BackButton from "./back";
import Header from "./Header"; // Import the Header component

function App() {
  return (
    <Router>
      <Header /> {/* Use the header component here */}
      <BackButton />

      <Routes>
        <Route path="/" element={<Prantya />} />
        <Route path="/vibhaga/:district" element={<Vibhaga />} />
        <Route path="/bhag/:vibhag" element={<Bhag />} />
      </Routes>
    </Router>
  );
}

export default App;


