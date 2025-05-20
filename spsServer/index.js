const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const prantRoutes = require("./Entity/PranthRoute");
const vibhagRoutes = require("./Entity/vibhag");
const bhagRoutes = require("./Entity/Bhag");
const nagarRoutes = require("./Entity/Nagar");
const vasathiRoutes = require("./Entity/Vasathi");
const upavasathiRoutes = require("./Entity/Upavasathi");
const eventsRoutes = require("./Entity/events"); 

mongoose
  .connect("mongodb+srv://vtech2025b1:I34ZlC4julSjebsU@vtech2025b1.disrm.mongodb.net/REVERSE00?retryWrites=true&w=majority&appName=vtech2025b1")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const app = express();
app.use(bodyparser.json());
app.use(cors());

// All routes
app.use("/api/prants", prantRoutes);     // /api/prants
app.use("/api/vibhags", vibhagRoutes);   // /api/vibhags/:prantId
app.use("/api", bhagRoutes);             // /api/bhags/:vibhagId
app.use("/api", nagarRoutes);
app.use("/api", vasathiRoutes);
app.use("/api", upavasathiRoutes);
app.use("/api", eventsRoutes);


app.listen(4000, () => {
  console.log("🚀 Server is running on Port 4000");
});
