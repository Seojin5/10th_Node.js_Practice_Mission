import express from "express";
import { handleUserSignUp } from "../controllers/user.controller.js";

const router = express.Router();

// 회원가입
router.post("/signup", handleUserSignUp);

export default router;