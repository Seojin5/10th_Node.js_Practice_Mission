import express from "express";
import { 
    challengeMission,
    getReceivedMissions,
    completeUserMission
} from "../controllers/userMission.controller.js";

const router = express.Router();

// 미션 도전
router.post("/:missionId/challenge", challengeMission)

// 진행중 미션 조회
router.get("/users/:userId/received", getReceivedMissions);

// 미션 완료 처리
router.patch("/:userMissionId/complete", completeUserMission);;

export default router;