import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../Styling/Nagar.css";

interface Nagar {
  _id: string;
  name: string;
}

function Nagar() {
  const [nagars, setNagars] = useState<Nagar[]>([]);
  const { bhagId } = useParams<{ bhagId: string }>();
  const location = useLocation();
  const bhagName = location.state?.bhagName || "ಭಾಗ";
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/nagars/${bhagId}`).then((res) => {
      setNagars(res.data);
    });
  }, [bhagId]);

  const handleClick = (nagar: Nagar) => {
    navigate(`/vasathi/${nagar._id}`, { state: { nagarName: nagar.name } });
  };

  return (
    <div className="page-container">
      <h2>{bhagName}</h2>
      <div className="button-group">
        {nagars.map((nagar) => (
          <button key={nagar._id} onClick={() => handleClick(nagar)}>
            {nagar.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Nagar;
