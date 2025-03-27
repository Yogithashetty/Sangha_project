import { useParams } from "react-router-dom";
import { vibhagData } from "../database/dataserver"; // Ensure correct import path
import { Link } from "react-router-dom";
import BackButton from "../back"; // Import back button
//import "../styles/Bhag.css"; // Ensure CSS file exists

export default function Bhag() {
  const { vibhag } = useParams<{ vibhag: string }>(); // Get Vibhag from URL
  const bhags = vibhag && vibhagData[vibhag] ? vibhagData[vibhag] : [];

  return (
    <div className="container">
      <h1 className="title">{vibhag ? `${vibhag} ಭಾಗ` : "ಭಾಗ ಲಭ್ಯವಿಲ್ಲ"}</h1>
      <BackButton /> {/* Add Back Button */}

      {bhags.length > 0 ? (
        <div className="district-grid">
          {bhags.map((bhag, index) => (
            <Link key={index} to={`/bhag/${bhag}`} className="district-box">
              {bhag}
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-data">ಯಾವುದೇ ಭಾಗಗಳು ಲಭ್ಯವಿಲ್ಲ</p>
      )}
    </div>
  );
}
