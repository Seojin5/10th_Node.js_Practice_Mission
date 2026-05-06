import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { handleUserSignUp } from "./modules/users/controllers/user.controller.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());                
app.use(express.static('public'));   
app.use(express.json());           
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is TypeScript Server!");
});

app.post("/api/v1/users/signup", handleUserSignUp);

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost>:${port}`);
});