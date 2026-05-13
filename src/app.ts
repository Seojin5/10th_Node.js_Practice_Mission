import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { RegisterRoutes } from "./generated/routes.js";
import { errorMiddleware } from "./common/middlewares/error.middleware.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";


dotenv.config();

const app: Express = express();

app.use(cors());

app.use(
  compression({
    threshold: 512,
  }),
);

app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is TypeScript Server!");
});

RegisterRoutes(app);

app.use(errorMiddleware);

export default app;