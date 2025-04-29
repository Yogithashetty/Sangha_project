// import { useParams, useNavigate } from "react-router-dom";

// function UpavasathiDetails() {
//   const { upavasathiId } = useParams<{ upavasathiId: string }>();
//   const navigate = useNavigate();

//   const handleCreateClick = () => {
//     navigate(`/create-participant/${upavasathiId}`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Upavasathi Details</h2>
//       <button
//         onClick={handleCreateClick}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#1976d2",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Create Participant
//       </button>
//     </div>
//   );
// }

// export default UpavasathiDetails;
// import { useParams, useNavigate } from "react-router-dom";

// function UpavasathiDetails() {
//   const { upavasathiId } = useParams<{ upavasathiId: string }>();
//   const navigate = useNavigate();

//   const handleCreateClick = () => {
//     navigate(`/create-participant/${upavasathiId}`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <button
//         onClick={handleCreateClick}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#1976d2",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Create Participant
//       </button>
//     </div>
//   );
// }

// export default UpavasathiDetails;
import { useParams, useNavigate } from "react-router-dom";

function UpavasathiDetails() {
  const { upavasathiId } = useParams<{ upavasathiId: string }>();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(`/create-participant/${upavasathiId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Removed the Upavasathi ID text */}
      <button
        onClick={handleCreateClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Create Participant
      </button>
    </div>
  );
}

export default UpavasathiDetails;
