// const express = require("express");
// const router = express.Router();
// const Participant = require("./ParticipantModel"); // ✅ adjust if needed
// const mongoose = require("mongoose");

// router.post("/", async (req, res) => {
//   console.log(" POST /api/participants hit with data:", req.body); // ✅ Add this

//   try {
//     const participant = new Participant(req.body);
//     await participant.save();
//     res.status(201).json(participant);
//   } catch (err) {
//     console.error(" Error saving participant:", err); // ✅ See actual backend error
//     res.status(500).json({ error: "Failed to create participant" });
//   }
// });


    
// module.exports = router;
// Entity/participantRoute.js

// const express = require("express");
// const router = express.Router();
// const Participant = require("./ParticipantModel");
// const Address = require("./Address");

// router.post("/", async (req, res) => {
//   try {
//     console.log(" Incoming request data:", req.body); // ✅ First check

//     const {
//       name,
//       phone,
//       email,
//       sanghaResponsibility,
//       bloodGroup,
//       type,
//       address1,
//       address2,
//       address3,
//       pincode,
//       upavasathi,
//       location
//     } = req.body;

//     const address = new Address({ address1, address2, address3, pincode, upavasathi, location });
//     const savedAddress = await address.save();
//     console.log("🏠 Address saved:", savedAddress); // ✅ Second check

//     const participant = new Participant({
//       name,
//       phone,
//       email,
//       sanghaResponsibility,
//       bloodGroup,
//       type,
//       address: savedAddress._id
//     });

//     const savedParticipant = await participant.save();
//     console.log("✅ Participant saved:", savedParticipant); // ✅ Third check

//     res.status(201).json(savedParticipant);
//   } catch (err) {
//     console.error("❌ Error creating participant:", err);
//     res.status(500).json({ error: "Failed to create participant" });
//   }
// });
// spsServer/Entity/participantRoute.js

const express = require("express");
const router = express.Router();
const Participant = require("./ParticipantModel");
const Address = require("./Address");

router.post("/:upavasathiId", async (req, res) => {
  try {
    const { upavasathiId } = req.params;
    const {
      name,
      phone,
      email,
      sanghaResponsibility,
      bloodGroup,
      type,
      address1,
      address2,
      address3,
      pincode,
      location
    } = req.body;

    const address = new Address({
      address1,
      address2,
      address3,
      pincode,
      location,
      upavasathi: upavasathiId
    });

    const savedAddress = await address.save();

    const participant = new Participant({
      name,
      phone,
      email,
      sanghaResponsibility,
      bloodGroup,
      type,
      address: savedAddress._id
    });

    const savedParticipant = await participant.save();

    res.status(201).json({
      message: "✅ Participant created successfully",
      participant: savedParticipant
    });
  } catch (err) {
    console.error("❌ Error creating participant:", err);
    res.status(500).json({ error: "Failed to create participant" });
  }
});

module.exports = router;
