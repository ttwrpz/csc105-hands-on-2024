import { Hono } from "hono";
import * as todoController from "../controller/todo.controller.js";

const todoRouter = new Hono();

todoRouter.post("/", todoController.AddTodo);
todoRouter.get("/", todoController.GetTodo);
todoRouter.patch("/:id", todoController.EditTodoName);
todoRouter.patch("/:id/complete", todoController.CompleteTodo);
todoRouter.delete("/:id", todoController.DeleteTodo);

export { todoRouter };
