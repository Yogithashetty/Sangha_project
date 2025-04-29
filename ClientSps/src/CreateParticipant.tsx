
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// interface ParticipantFormData {
//   name: string;
//   phoneNumber: string;
//   address: string;
//   pincode: string;
//   email: string;
//   upavasathiId: string;
// }

// const CreateParticipant: React.FC = () => {
//   const { upavasathiId } = useParams<{ upavasathiId: string }>();

//   const [formData, setFormData] = useState<ParticipantFormData>({
//     name: "",
//     phoneNumber: "",
//     address: "",
//     pincode: "",
//     email: "",
//     upavasathiId: upavasathiId || ""
//   });

//   useEffect(() => {
//     if (upavasathiId) {
//       setFormData((prevData) => ({
//         ...prevData,
//         upavasathiId
//       }));
//     }
//   }, [upavasathiId]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submitting form with data:", formData);

//     try {
//       const response =await axios.post(
//         "http://localhost:4000/api/participants"
// , // ✅ Corrected route
//         formData
//       );
      
//       console.log("Server response:", response.data);
//       alert("Participant Created Successfully");

//       setFormData((prevData) => ({
//         ...prevData,
//         name: "",
//         phoneNumber: "",
//         address: "",
//         pincode: "",
//         email: ""
//       }));
//     } catch (err: any) {
//       console.error("Error creating participant:", err);
//       if (err.response && err.response.data) {
//         alert("Error: " + err.response.data.error);
//       } else {
//         alert("An unexpected error occurred. Check console for details.");
//       }
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>Create Participant</h2>

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           maxWidth: "400px"
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />

//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={formData.phoneNumber}
//           onChange={(e) =>
//             setFormData({ ...formData, phoneNumber: e.target.value })
//           }
//           required
//         />

//         <input
//           type="text"
//           placeholder="Address"
//           value={formData.address}
//           onChange={(e) =>
//             setFormData({ ...formData, address: e.target.value })
//           }
//           required
//         />

//         <input
//           type="number"
//           placeholder="Pincode"
//           value={formData.pincode}
//           onChange={(e) =>
//             setFormData({ ...formData, pincode: e.target.value })
//           }
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//           required
//         />

//         <button
//           type="submit"
//           style={{
//             padding: "10px",
//             backgroundColor: "#2e7d32",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const CreateParticipant: React.FC = () => {
//   const { upavasathiId } = useParams<{ upavasathiId: string }>();

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     sanghaResponsibility: "",
//     bloodGroup: "",
//     type: "",
//     address1: "",
//     address2: "",
//     address3: "",
//     pincode: "",
//     location: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // 1️⃣ Save address first
//       const addressRes = await axios.post("http://localhost:4000/api/addresses", {
//         address1: formData.address1,
//         address2: formData.address2,
//         address3: formData.address3,
//         pincode: formData.pincode,
//         upavasathi: upavasathiId, // ✅ correct spelling
//         location: formData.location
//       });

//       const addressId = addressRes.data._id;

//       // 2️⃣ Save participant with address ObjectId
//       const participantRes = await axios.post("http://localhost:4000/api/participants", {
//         name: formData.name,
//         phone: formData.phone,
//         email: formData.email,
//         sanghaResponsibility: formData.sanghaResponsibility,
//         bloodGroup: formData.bloodGroup,
//         type: formData.type,
//         address: addressId
//       });

//       alert("✅ Participant created successfully!");
//       console.log("Saved participant:", participantRes.data);

//       // Reset form
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         sanghaResponsibility: "",
//         bloodGroup: "",
//         type: "",
//         address1: "",
//         address2: "",
//         address3: "",
//         pincode: "",
//         location: ""
//       });
//     } catch (err) {
//       console.error("❌ Error creating participant:", err);
//       alert("Failed to create participant. Check console for error.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Create Participant</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
//         <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input name="sanghaResponsibility" placeholder="Sangha Responsibility" value={formData.sanghaResponsibility} onChange={handleChange} />
//         <input name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} />
//         <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
//         <input name="address1" placeholder="Address Line 1" value={formData.address1} onChange={handleChange} required />
//         <input name="address2" placeholder="Address Line 2" value={formData.address2} onChange={handleChange} />
//         <input name="address3" placeholder="Address Line 3" value={formData.address3} onChange={handleChange} />
//         <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required />
//         <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
//         <button type="submit" style={{ padding: "10px", backgroundColor: "#1976d2", color: "#fff", border: "none", borderRadius: "5px" }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateParticipant;
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateParticipant: React.FC = () => {
  const { upavasathiId } = useParams<{ upavasathiId: string }>();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    sanghaResponsibility: "",
    bloodGroup: "",
    type: "",
    address1: "",
    address2: "",
    address3: "",
    pincode: "",
    location: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4000/api/participants/${upavasathiId}`,
        formData
      );

      setSuccessMessage("✅ Participant created successfully!");
      console.log("🎉 Success:", response.data);

      setFormData({
        name: "",
        phone: "",
        email: "",
        sanghaResponsibility: "",
        bloodGroup: "",
        type: "",
        address1: "",
        address2: "",
        address3: "",
        pincode: "",
        location: ""
      });

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to create participant. Check console for error.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Participant</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="sanghaResponsibility" placeholder="Sangha Responsibility" value={formData.sanghaResponsibility} onChange={handleChange} />
        <input name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} />
        <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
        <input name="address1" placeholder="Address Line 1" value={formData.address1} onChange={handleChange} required />
        <input name="address2" placeholder="Address Line 2" value={formData.address2} onChange={handleChange} />
        <input name="address3" placeholder="Address Line 3" value={formData.address3} onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#1976d2", color: "#fff", border: "none", borderRadius: "5px" }}>Submit</button>
      </form>

      {successMessage && <p style={{ color: "green", marginTop: "15px" }}>{successMessage}</p>}
    </div>
  );
};

export default CreateParticipant;
