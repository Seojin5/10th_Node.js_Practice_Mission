import express from "express";
import { 
    createReview,
    getMyReviews
 } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);

router.get("/users/:userId", getMyReviews);

export default router;