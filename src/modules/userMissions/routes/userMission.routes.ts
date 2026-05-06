import express from "express";
import { challengeMission } from "../controllers/userMission.controller.js";

const router = express.Router();

// 미션 도전
router.post("/:missionId/challenge", challengeMission);

export default router;