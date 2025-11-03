import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// Create order
router.post("/", createOrder);

// Get all orders
router.get("/", getOrders);

// Get single order by ID
router.get("/:id", getOrderById);

// Update order status using PATCH
router.patch("/:id", updateOrderStatus);

export default router;
