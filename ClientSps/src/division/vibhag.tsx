import { Link, useParams } from "react-router-dom";
import { districtsData } from "../database/dataserver";
//import  BackButton  from "../back";

export default function Vibhaga() {
  const { district } = useParams<{ district: string }>();
  const vibhagas = district ? districtsData[district] || [] : [];

  return (
    <div className="container">
      <h1 className="title">{district} ವಿಭಾಗ</h1>


      {vibhagas.length > 0 ? (
        <div className="district-grid">
          {vibhagas.map((vibhag, index) => (
            <Link key={index} to={`/bhag/${vibhag}`} className="district-box">
              {vibhag}
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-data">ಯಾವುದೇ ವಿಭಾಗಗಳು ಲಭ್ಯವಿಲ್ಲ</p>
      )}
    </div>
  );
}
