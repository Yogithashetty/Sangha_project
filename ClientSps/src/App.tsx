import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Prantya from "./division/state";
import Vibhaga from "./division/vibhag";
import Bhag from "./division/bhag";
import BackButton from "./back";

function App() {
  return (
    <Router>
      <div >
        <BackButton />

        <Routes>
          <Route path="/" element={<Prantya />} />
          <Route path="/vibhaga/:district" element={<Vibhaga />} />
          <Route path="/bhag/:vibhag" element={<Bhag />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
