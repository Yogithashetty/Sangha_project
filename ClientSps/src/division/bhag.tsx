import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../Styling/Bhag.css";

interface Bhag {
  _id: string;
  name: string;
}

function Bhag() {
  const [bhags, setBhags] = useState<Bhag[]>([]);
  const { vibhagId} = useParams<{ vibhagId: string }>();
  const location = useLocation();
  const vibhagName = location.state?.vibhagName || "ವಿಭಾಗ";
  const navigate = useNavigate();

  console.log(vibhagId)
  useEffect(() => {
    axios.get(`http://localhost:4000/api/bhags/${vibhagId}`).then((res) => {
      setBhags(res.data);
    });
  }, [vibhagId]);

  const handleClick = (bhag: Bhag) => {
    navigate(`/nagar/${bhag._id}`);
  };

  return (
    <div className="page-container">
      <h2>{vibhagName}</h2>
      <div className="button-group">
        {bhags.map((bhag) => (
          <button key={bhag._id} onClick={() => handleClick(bhag)}>
            {bhag.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Bhag;
