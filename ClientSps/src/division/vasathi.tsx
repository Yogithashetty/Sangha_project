import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../Styling/Vasathi.css";

interface Vasathi {
  _id: string;
  name: string;
}

function Vasathi() {
  const [vasathis, setVasathis] = useState<Vasathi[]>([]);
  const { nagarId } = useParams<{ nagarId: string }>();
  const location = useLocation();
  const nagarName = location.state?.nagarName || "ನಗರ";
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/vasathis/${nagarId}`).then((res) => {
      setVasathis(res.data);
    });
  }, [nagarId]);

  const handleClick = (vasathi: Vasathi) => {
    navigate(`/upavasathi/${vasathi._id}`);
  };

  return (
    <div className="page-container">
      <h2>{nagarName}</h2>
      <div className="button-group">
        {vasathis.map((vasathi) => (
          <button key={vasathi._id} onClick={() => handleClick(vasathi)}>
            {vasathi.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Vasathi;
