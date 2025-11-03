import express from "express";
import { addToCart, getCart, removeFromCart, clearCart } from "../controllers/cartController.js";

const router = express.Router();

// Add product to cart
router.post("/add", addToCart);


router.get("/:userId", getCart);


router.delete("/remove", removeFromCart);

// Clear entire cart
router.delete("/clear/:userId", clearCart);

export default router;
