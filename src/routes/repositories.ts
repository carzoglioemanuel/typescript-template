import { Router } from "express";
import {
  createRepository,
  uploadFiles,
} from "../controllers/repositories.controller";

const router = Router();

router.post("/api/create-repository", createRepository);
router.post("/api/upload-files", uploadFiles);

export default router;
