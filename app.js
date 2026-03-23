const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ pehle middleware
app.use(cors());
app.use(express.json());

// ✅ phir routes
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));
app.use("/ride", require("./routes/ride"));

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});