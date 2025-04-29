import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../Styling/Vibhag.css";

interface Vibhag {
  _id: string;
  name: string;
}

function Vibhag() {
  const [vibhags, setVibhags] = useState<Vibhag[]>([]);
  const { prantId } = useParams<{ prantId: string }>();
  const location = useLocation();
  const prantName = location.state?.prantName || "ಪ್ರಾಂತ";
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/vibhags/${prantId}`).then((res) => {
      setVibhags(res.data);
    });
  }, [prantId]);

  const handleClick = (vibhag: Vibhag) => {
    console.log(vibhag._id)
    navigate(`/bhag/${vibhag._id}`);
  };

  return (
    <div className="page-container">
      <h2>{prantName}</h2>
      <div className="button-group">
        {vibhags.map((vibhag) => (
          <button key={vibhag._id} onClick={() => handleClick(vibhag)}>
            {vibhag.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Vibhag;
