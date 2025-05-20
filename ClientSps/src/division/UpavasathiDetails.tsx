import { useParams, useNavigate } from "react-router-dom";

function UpavasathiDetails() {
  const { upavasathiId } = useParams<{ upavasathiId: string }>();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(`/create-event/${upavasathiId}`);
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
        add event
      </button>
    </div>
  );
}

export default UpavasathiDetails;
