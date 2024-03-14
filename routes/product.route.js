import express from "express";
import {
  getProducts,
  getProdByID,
  createProd,
  updateProd,
  delProd,
} from "../controllers/product.controllers.js";
const router = express.Router();

// get
router.get("/", getProducts);
router.get("/:id", getProdByID);

// post
router.post("/", createProd);

// update
router.put("/:id", updateProd);

// delete
router.delete("/:id", delProd);

export default router;
