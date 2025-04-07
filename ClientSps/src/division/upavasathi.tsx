import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../Styling/Upavasthi.css";

interface Upavasathi {
  _id: string;
  name: string;
}

function Upavasathi() {
  const [upavasathis, setUpavasathis] = useState<Upavasathi[]>([]);
  const { vasathiId } = useParams<{ vasathiId: string }>();
  const location = useLocation();
  const vasathiName = location.state?.vasathiName || "ವಸತಿ";

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/upavasathis/${vasathiId}`)
      .then((res) => {
        setUpavasathis(res.data);
      });
  }, [vasathiId]);

  return (
    <div className="page-container">
      <h2>{vasathiName}</h2>
      <div className="button-group">
        {upavasathis.map((upa) => (
          <button key={upa._id}>{upa.name}</button>
        ))}
      </div>
    </div>
  );
}

export default Upavasathi;
