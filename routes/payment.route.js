import { initializePayment, verifyPayment } from "../controllers/payment.controller.js";
import { authenticate } from "../middleware/auth.middleware.js"

import { Router } from "express";

const router = Router();

router.post("/initialize", authenticate, initializePayment);
router.get("/verify/:reference", verifyPayment);
// router.post("/webhook", );

export default router;
