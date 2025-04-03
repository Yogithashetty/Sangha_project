const { Prant } = require("./schema"); // Import the Prant model

// Function to fetch Vibhags by Prant Name
const getVibhagsByPrant = async (req, res) => {
  try {
    const { prantName } = req.params;

    // Find the Prant by name and populate Vibhags
    const prant = await Prant.findOne({ name: prantName }).populate("vibhags");

    if (!prant) {
      return res.status(404).json({ message: "Prant not found" });
    }

    res.json(prant.vibhags); // Return only Vibhags
  } catch (error) {
    console.error("Error fetching Vibhags:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getVibhagsByPrant };
