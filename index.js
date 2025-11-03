import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // POST body parse

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes); // ✅ Cart routes

// Default route
app.get("/", (req, res) => {
  res.send("E-commerce backend is running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err.message));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
