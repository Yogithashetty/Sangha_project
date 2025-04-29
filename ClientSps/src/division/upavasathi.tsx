// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../Styling/Upavasthi.css";

// interface Upavasathi {
//   _id: string;
//   name: string;
// }

// function Upavasathi() {
//   const [upavasathis, setUpavasathis] = useState<Upavasathi[]>([]);
//   const { vasathiId } = useParams<{ vasathiId: string }>();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const vasathiName = location.state?.vasathiName || "ವಸತಿ";

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/upavasathis/${vasathiId}`)
//       .then((res) => {
//         setUpavasathis(res.data);
//       });
//   }, [vasathiId]);

//   const handleUpavasathiClick = (upavasathi: Upavasathi) => {
//     navigate(`/create-participant/${upavasathi._id}`, {
//       state: { upavasathiName: upavasathi.name },
//     });
//   };

//   return (
//     <div className="page-container">
//       <h2>{vasathiName}</h2>
//       <div className="button-group">
//         {upavasathis.map((upa) => (
//           <button key={upa._id} onClick={() => handleUpavasathiClick(upa)}>
//             {upa.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Upavasathi;
// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../Styling/Upavasthi.css";

// interface Upavasathi {
//   _id: string;
//   name: string;
// }

// function Upavasathi() {
//   const [upavasathis, setUpavasathis] = useState<Upavasathi[]>([]);
//   const { vasathiId } = useParams<{ vasathiId: string }>();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/upavasathis/${vasathiId}`)
//       .then((res) => {
//         setUpavasathis(res.data);
//       });
//   }, [vasathiId]);

//   const handleUpavasathiClick = (upavasathiId: string) => {
//     navigate(`/upavasathi-details/${upavasathiId}`);
//   };

//   return (
//     <div className="page-container">
//       <h2>ಉಪವಸತಿ</h2>
//       <div className="button-group">
//         {upavasathis.map((upa) => (
//           <button key={upa._id} onClick={() => handleUpavasathiClick(upa._id)}>
//             {upa.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Upavasathi;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styling/Upavasthi.css";
import { Link } from 'react-router-dom';

interface Upavasathi {
  _id: string;
  name: string;
}

function Upavasathi() {
  const [upavasathis, setUpavasathis] = useState<Upavasathi[]>([]);
  const { vasathiId } = useParams<{ vasathiId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/upavasathis/${vasathiId}`)
      .then((res) => {
        setUpavasathis(res.data);
      })
      .catch((err) => {
        console.error("Error fetching upavasathis:", err);
      });
  }, [vasathiId]);

  const handleUpavasathiClick = (upavasathiId: string) => {
    // ✅ Navigate to Create Participant page with upavasathiId in URL
    navigate(`/upavasathi-details/${upavasathiId}`);

  };
  
  return (
    <div className="page-container">
      <h2>ಉಪವಸತಿ</h2>
      <div className="button-group">
        {upavasathis.map((upa) => (
          <button key={upa._id} onClick={() => handleUpavasathiClick(upa._id)}>
            {upa.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Upavasathi;
