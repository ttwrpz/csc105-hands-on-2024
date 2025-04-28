import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetTodo = async (c: Context) => {
  try {
      return c.json({
          success: true,
          data: await todoModel.GetTodo(),
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
      const body = await c.req.json<{ name: string}>();
      if (!body || !body.name) {
          return c.json({
              success: false,
              data: null,
              msg: `Invalid todo name`,
          }, 400)
      }

      await todoModel.AddTodo(body.name);

      return c.json({
          success: true,
          msg: "Success",
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
      const body = await c.req.json<{ name: string}>();
      const id = await c.req.param('id');

      if (!id || isNaN(parseInt(id))) {
          return c.json({
              success: false,
              data: null,
              msg: `Invalid id`,
          }, 400)
      }

      if (!body || !body.name) {
          return c.json({
              success: false,
              data: null,
              msg: `Invalid todo name`,
          }, 400)
      }

      await todoModel.EditTodo(Number(id), body.name);

      return c.json({
          success: true,
          msg: "Success",
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
      const id = await c.req.param('id');

      if (!id || isNaN(parseInt(id))) {
          return c.json({
              success: false,
              data: null,
              msg: `Invalid id`,
          }, 400)
      }

      await todoModel.SuccessTodo(Number(id));

      return c.json({
          success: true,
          msg: "Success",
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
      const id = await c.req.param('id');

      if (!id || isNaN(parseInt(id))) {
          return c.json({
              success: false,
              data: null,
              msg: `Invalid id`,
          }, 400)
      }

      await todoModel.DeleteTodo(Number(id));

      return c.json({
          success: true,
          msg: "Success",
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
