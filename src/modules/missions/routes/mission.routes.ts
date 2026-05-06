import express from "express";
import { createMission } from "../controllers/mission.controller.js";

const router = express.Router();

// 특정 가게에 미션 생성
router.post("/stores/:storeId", createMission);

export default router;