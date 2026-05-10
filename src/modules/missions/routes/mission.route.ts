import express from "express";
import { 
    createMission,
    getStoreMissions
} from "../controllers/mission.controller.js";

const router = express.Router();

// 특정 가게에 미션 생성
router.post("/stores/:storeId", createMission);

// 특정 가게 미션 조회
router.get("/stores/:storeId/missions", getStoreMissions);

export default router;