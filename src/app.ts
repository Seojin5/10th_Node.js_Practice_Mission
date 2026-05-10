import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

import userRouter from "./modules/users/routes/user.route.js";
import reviewRouter from "./modules/reviews/routes/review.route.js";
import missionRouter from "./modules/missions/routes/mission.route.js";
import userMissionRouter from "./modules/userMissions/routes/userMission.route.js";
import storeRouter from "./modules/stores/routes/store.route.js";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is TypeScript Server!");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/missions", missionRouter);
app.use("/api/v1/user-missions", userMissionRouter);
app.use("/api/v1/stores", storeRouter);

export default app;