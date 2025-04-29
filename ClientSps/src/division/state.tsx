import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styling/Prant.css";

interface Prant {
  _id: string;
  name: string;
}

function Prant() {
  const [prants, setPrants] = useState<Prant[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/api/prants").then((res) => {
      setPrants(res.data);
    });
  }, []);

  const handleClick = (prant: Prant) => {
    navigate(`/vibhag/${prant._id}`, { state: { prantName: prant.name } });
  };

  return (
    <div className="page-container">
      <h2>ಪ್ರಾಂತವನ್ನು ಆಯ್ಕೆಮಾಡಿ</h2>
      <div className="button-group">
        {prants.map((prant) => (
          <button key={prant._id} onClick={() => handleClick(prant)}>
            {prant.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Prant;
