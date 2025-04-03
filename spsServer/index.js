const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const prantRoutes = require("./PranthRoute");
const Prant = require("./pranthmodel"); // Import Prant model

mongoose.connect("mongodb+srv://vtech2025b1:I34ZlC4julSjebsU@vtech2025b1.disrm.mongodb.net/test27?retryWrites=true&w=majority&appName=vtech2025b1")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const app = express();
app.use(bodyparser.json());
app.use(cors());

// Use Prant API
app.use("/api", prantRoutes);

// Fetch and log Prant names when server starts
async function fetchAndLogPrants() {
  try {
    const prants = await Prant.find({}, "name");

    if (prants.length > 0) {
      console.log("Available Prants:");
      prants.forEach(prant => console.log(prant.name));
    } else {
      console.log("No Prants found in the database.");
    }
  } catch (error) {
    console.error("Error fetching Prants:", error);
  }
}

// Call function to fetch and log Prants
fetchAndLogPrants();

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
