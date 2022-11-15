import { Router } from "express";
import { healthCheckStatus } from "../controllers/healthCheck.controller";

const router = Router();

router.get("/health-check", healthCheckStatus);

export default router;
