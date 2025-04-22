import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.createUser);
userRouter.patch("/", userController.editUser);

export { userRouter };