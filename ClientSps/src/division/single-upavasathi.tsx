// single-upavasathi.tsx
import { useLocation, useNavigate } from "react-router-dom";

function SingleUpavasathi() {
  const location = useLocation();
  const navigate = useNavigate();

  const vasathiId = location.state?.vasathiId || "";
  const vasathiName = location.state?.vasathiName || "ಉಪವಸತಿ";

  const handleAddEvent = () => {
    navigate("/create-event", {
      state: { vasathiId, vasathiName },
    });
  };

  return (
    <div className="page-container">
      <h2>{vasathiName}</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleAddEvent}
      >
        Add Event
      </button>
    </div>
  );
}

export default SingleUpavasathi;
