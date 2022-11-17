import { Router } from "express";
import { createRepository } from "../controllers/repositories.controller";

const router = Router();

router.post("/api/create-repository", createRepository);

export default router;
