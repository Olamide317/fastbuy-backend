import { getAllProducts } from "../controllers/product.controller.js";

import { Router } from "express";

const router = Router();

router.get("/", getAllProducts);

export default router;
