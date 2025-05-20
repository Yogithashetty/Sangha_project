import { useState } from "react";
import { useParams } from "react-router-dom";
const EventForm = () => {
  const { upavasathiId } = useParams<{ upavasathiId: string }>();
  const [formData, setFormData] = useState({
    milan: "",
    utsavPlace: "",
    utsavType: "",
    date: "",
    time: "",
    chiefGuest: { name: "", phone: "", email: "" },
    speaker: { name: "", phone: "", responsibility: "" },
    pramukh: { name: "", phone: "", responsibility: "" },
  });

  const [phoneErrors, setPhoneErrors] = useState({
    chiefGuest: "",
    speaker: "",
    pramukh: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    section?: keyof typeof formData,
    field?: string
  ) => {
    const value = e.target.value;

    // Phone validation
    if (field === "phone") {
      if (!/^\d{0,10}$/.test(value)) {
        setPhoneErrors((prev) => ({
          ...prev,
          [section as string]: "Phone number must be 10 digits only.",
        }));
        return;
      } else {
        setPhoneErrors((prev) => ({ ...prev, [section as string]: "" }));
      }
    }

    if (section && field) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...(prev[section] as Record<string, string>),
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Received upavasathiId:", upavasathiId);
   
  
    try {
      const response = await fetch("http://localhost:4000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          upavasathiId, // ✅ include this in the payload
        }),
      });
  
      if (response.ok) {
        alert("Event submitted successfully!");
        setFormData({
          milan: "",
          utsavPlace: "",
          utsavType: "",
          date: "",
          time: "",
          chiefGuest: { name: "", phone: "", email: "" },
          speaker: { name: "", phone: "", responsibility: "" },
          pramukh: { name: "", phone: "", responsibility: "" },
        });
      } else {
        alert("Failed to submit event.");
      }
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("Error submitting event");
    }
  };
  


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
  {/* Milan */}
  <div className="flex items-center">
    <label className="w-48 font-semibold text-right pr-4">ಶಾಖೆ/ಮಿಲನ/Shakhe/Milan</label>
    <input
      type="text"
      name="milan"
      className="flex-1 border p-2 rounded"
      onChange={handleChange}
    />
  </div>

  {/* Utsav Place */}
  <div className="flex items-center">
    <label className="w-48 font-semibold text-right pr-4">ಉತ್ಸವ ಸ್ಥಳ/Utsav Place</label>
    <input
      type="text"
      name="utsavPlace"
      className="flex-1 border p-2 rounded"
      onChange={handleChange}
    />
  </div>

  {/* Utsav Type */}
  <div className="flex items-center">
    <label className="w-48 font-semibold text-right pr-4">ಸಮಾರಂಭ/Utsav Type</label>
    <select
      name="utsavType"
      className="flex-1 border p-2 rounded"
      onChange={handleChange}
    >
      <option value="">Select Utsav Type</option>
      <option value="Baalaka">ಬಾಲಕ/Baalaka</option>
      <option value="Taruna">ತರುಣ/Taruna</option>
      <option value="Samyukta">ಸಂಯುಕ್ತ/Samyukta</option>
    </select>
  </div>

  {/* Date & Time */}
  <div className="flex items-center">
    <label className="w-48 font-semibold text-right pr-4">ದಿನಾಂಕ/Date</label>
    <input
      type="date"
      name="date"
      className="flex-1 border p-2 rounded"
      onChange={handleChange}
    />
  </div>

  <div className="flex items-center">
    <label className="w-48 font-semibold text-right pr-4">ಸಮಯ/Time</label>
    <input
      type="time"
      name="time"
      className="flex-1 border p-2 rounded"
      onChange={handleChange}
    />
  </div>
</div>

        {/* Chief Guest Section */}
        <div>
          <h3 className="font-semibold">ಮುಖ್ಯ ಅತಿಥಿ/Chief Guest</h3>
          <input type="text" placeholder="ಹೆಸರು/Name" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "chiefGuest", "name")} />
          <input type="text" placeholder="ದೂರವಾಣಿ/Phone" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "chiefGuest", "phone")} />
          {phoneErrors.chiefGuest && <p className="text-red-500 text-sm">{phoneErrors.chiefGuest}</p>}
          <input type="email" placeholder="ಇಮೇಲ್/email" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "chiefGuest", "email")} />
        </div>

        {/* Speaker Section */}
        <div>
          <h3 className="font-semibold">ಬೌದ್ಧಿಕ/Speaker</h3>
          <input type="text" placeholder="ಹೆಸರು/Name" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "speaker", "name")} />
          <input type="text" placeholder="ದೂರವಾಣಿ/Phone" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "speaker", "phone")} />
          {phoneErrors.speaker && <p className="text-red-500 text-sm">{phoneErrors.speaker}</p>}
          <input type="text" placeholder="ಸಂವಂದನೆ ಜವಾಬ್ದಾರಿ/responsibility" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "speaker", "responsibility")} />
        </div>

        {/* Utsav Pramukh Section */}
        <div>
          <h3 className="font-semibold">ಉತ್ಸವ ಪ್ರಮುಖ/Utsav Pramukh</h3>
          <div className="flex gap-4">
            <input type="text" placeholder="ಹೆಸರು/Name" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "pramukh", "name")} />
            <input type="text" placeholder="ದೂರವಾಣಿ/Phone" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "pramukh", "phone")} />
            <input type="text" placeholder="ಸಂವಂದನೆ ಜವಾಬ್ದಾರಿ/responsibility" className="w-full border p-2 mb-2" onChange={(e) => handleChange(e, "pramukh", "responsibility")} />
          </div>
          {phoneErrors.pramukh && <p className="text-red-500 text-sm">{phoneErrors.pramukh}</p>}
        </div>

        <br />
        <br />

        {/* Buttons with proper spacing */}
        <div className="flex justify-center space-x-20 mt-4">
        <button type="button" className="bg-gray-500 text-white px-6 py-2 rounded" >CANCEL</button>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
