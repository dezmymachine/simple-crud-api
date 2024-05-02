import { Router } from "express";
import {
  addProduct,
  allProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.post("/", addProduct);
router.get("/", allProducts);
router.get("/:id", getSingleProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
