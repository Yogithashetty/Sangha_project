import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../src/Styling/Prant.css";

interface Prant {
  _id: string;
  name: string;
}

function HomePage() {
  const [prants, setPrants] = useState<Prant[]>([]);
  const [fetched, setFetched] = useState(false);
  const navigate = useNavigate();

  const fetchPrants = () => {
    axios.get("http://localhost:4000/api/prants").then((res) => {
      setPrants(res.data);
      setFetched(true);
    });
  };

  const handleClick = (prant: Prant) => {
    navigate(`/vibhag/${prant._id}`, { state: { prantName: prant.name } });
  };

  return (
    <div className="page-container">
      <h2>ಪ್ರಾಂತವನ್ನು ಆಯ್ಕೆಮಾಡಿ</h2>

      {/* Fetch Prants Button */}
      {!fetched && (
        <button className="fetch-btn" onClick={fetchPrants}>
          Fetch Prants
        </button>
      )}

      {/* Prant Buttons */}
      {fetched && (
        <div className="button-group">
          {prants.map((prant) => (
            <button key={prant._id} onClick={() => handleClick(prant)}>
              {prant.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
