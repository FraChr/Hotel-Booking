const express = require("express");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/rooms");
const bookingRoutes = require("./routes/booking");

const app = express();
app.use(express.json()); // Middleware to parse JSON request

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
