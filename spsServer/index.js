// const express = require("express");
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const cors = require("cors");
// const axios = require("axios");

// const prantRoutes = require("./Entity/PranthRoute");
// const vibhagRoutes = require("./Entity/vibhag");
// const bhagRoutes = require("./Entity/Bhag");
// const nagarRoutes = require("./Entity/Nagar");
// const vasathiRoutes = require("./Entity/Vasathi");
// const upavasathiRoutes = require("./Entity/Upavasathi");
// const participantRoutes = require("./Entity/participantRoute");
// const addressRoutes = require("./Entity/Address"); // ✅ path must be correct
//  // ✅ mount path matches frontend


// // ✅ NEW

// mongoose
//   .connect("mongodb+srv://vtech2025b1:I34ZlC4julSjebsU@vtech2025b1.disrm.mongodb.net/REVERSE00?retryWrites=true&w=majority&appName=vtech2025b1")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// const app = express();
// app.use(bodyparser.json());
// app.use(cors());

// // All routes
// app.use("/api/prants", prantRoutes);
// app.use("/api/vibhags", vibhagRoutes);
// app.use("/api", bhagRoutes);
// app.use("/api", nagarRoutes);
// app.use("/api", vasathiRoutes);
// app.use("/api", upavasathiRoutes);
// app.use("/api/participants", participantRoutes);
// app.use("/api/addresses", addressRoutes);

// // Adjust path if needed




// // ✅ NEW


// app.listen(4000, () => {
//   console.log("🚀 Server is running on Port 4000");
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const prantRoutes = require("./Entity/PranthRoute");
const vibhagRoutes = require("./Entity/vibhag");
const bhagRoutes = require("./Entity/Bhag");
const nagarRoutes = require("./Entity/Nagar");
const vasathiRoutes = require("./Entity/Vasathi");
const upavasathiRoutes = require("./Entity/Upavasathi");
const participantRoutes = require("./Entity/participantRoute");
const addressRoutes = require("./Entity/Address");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose
  .connect("mongodb+srv://vtech2025b1:I34ZlC4julSjebsU@vtech2025b1.disrm.mongodb.net/REVERSE00?retryWrites=true&w=majority&appName=vtech2025b1")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Route Mounts
app.use("/api/prants", prantRoutes);
app.use("/api/vibhags", vibhagRoutes);
app.use("/api", bhagRoutes);
app.use("/api", nagarRoutes);
app.use("/api", vasathiRoutes);
app.use("/api", upavasathiRoutes);
app.use("/api/participants", participantRoutes);
app.use("/api/addresses", addressRoutes);

// Server start
app.listen(4000, () => {
  console.log("🚀 Server is running on Port 4000");
});
