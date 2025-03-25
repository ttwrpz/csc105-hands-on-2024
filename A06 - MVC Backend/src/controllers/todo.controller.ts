import type { Context } from "hono";
import * as TodoModel from "../models/todo.model.ts";
import type { CreateTodoInput, Todo, UpdateTodoInput } from "../types/index.ts";

export async function getTodos(c: Context) {
  const completed = c.req.query("completed");

  let todos;
  if (completed === "true") {
    todos = TodoModel.findByCompleted(true);
  } else if (completed === "false") {
    todos = TodoModel.findByCompleted(false);
  } else {
    todos = TodoModel.findAll();
  }

  return c.json(todos);
}

export async function getTodo(c: Context) {
  const id = parseInt(c.req.param("id"));
  const getTodo = TodoModel.findById(id);

  if (!getTodo) {
    return c.json({ error: "Todo not found" }, 404);
  }

  return c.json(getTodo);
}

export async function createTodo(c: Context) {
  const input = c.get("todoData") as CreateTodoInput;
  const newTodo = TodoModel.create(input);

  return c.json(newTodo, 201);
}

export async function updateTodo(c: Context) {
  const id = parseInt(c.req.param("id"));
  const input = c.get("todoData") as Todo;

  const updatedTodo = TodoModel.update(id, input);

  if (!updatedTodo) {
    return c.json({ error: "Todo not found" }, 404);
  }

  return c.json(updatedTodo);
}

export async function patchTodo(c: Context) {
  const id = parseInt(c.req.param("id"));
  const input = c.get("todoData") as UpdateTodoInput;

  const patchedTodo = TodoModel.patch(id, input);

  if (!patchedTodo) {
    return c.json({ error: "Todo not found" }, 404);
  }

  return c.json(patchedTodo);
}

export async function deleteTodo(c: Context) {
  const id = parseInt(c.req.param("id"));
  const deletedTodo = TodoModel.remove(id);

  if (!deletedTodo) {
    return c.json({ error: "Todo not found" }, 404);
  }

  return c.json({
    message: "Todo deleted successfully",
    deleted: deletedTodo,
  });
}

export async function searchTodos(c: Context) {
  const term = c.req.query("q");

  if (!term) {
    return c.json({ error: "Search term is required" }, 400);
  }

  const results = TodoModel.search(term);

  return c.json({
    results: results,
    count: results.length,
    term: term,
  });
}
