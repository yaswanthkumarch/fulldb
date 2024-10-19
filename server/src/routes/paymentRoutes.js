// import { Router } from "express";
// import { paymentController, verifyController } from "../controllers/payentController.js";

// export const paymnetRoutes = Router();

// paymnetRoutes.route("/payment").post(paymentController);
// paymnetRoutes.route("/verify").post(verifyController);

import { Router } from "express";
import { paymentController, verifyController } from "../controllers/payentController.js"; // Ensure this is correct as well

// Correct the variable name from paymnetRoutes to paymentRoutes
export const paymentRoutes = Router();

paymentRoutes.route("/payment").post(paymentController);
paymentRoutes.route("/verify").post(verifyController);