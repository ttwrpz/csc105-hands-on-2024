import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import * as userModel from "../models/user.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const maskAsCompleteTodo = async (c: Context) => {
    try {
        const idParam = c.req.query('id');

        if (!idParam)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );

        if (isNaN(parseInt(idParam))) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Invalid id parameter",
                },
                400
            );
        }

        const id = Number(idParam);
        if(!await todoModel.getTodo(id)) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Todo not found",
                },
                404
            );
        }

        await todoModel.maskAsCompleteTodo(id);

        return c.json({
            success: true,
            msg: "Mark as complete successfully",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateTodo = async (c: Context) => {
    try {
        const idParam = c.req.query('id');
        const body = await c.req.json<{title: string}>();
        if (!idParam || !body.title)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );

        if (isNaN(parseInt(idParam))) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Invalid id parameter",
                },
                400
            );
        }

        const id = Number(idParam);
        if(!await todoModel.getTodo(id)) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Todo not found",
                },
                404
            );
        }

        await todoModel.updateTodo(id, body.title);

        return c.json({
            success: true,
            msg: "Change title successfully",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodosByUserId = async (c: Context) => {
    try {
        const idParam = c.req.query('id');
        if (!idParam)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );

        if (isNaN(parseInt(idParam))) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Invalid id parameter",
                },
                400
            );
        }

        const id = Number(idParam);
        if(!await userModel.getUserById(id)) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "User not found",
                },
                404
            );
        }

        const todos = await todoModel.getTodosByUserId(id);

        return c.json({
            success: true,
            data: todos,
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export { createTodo , getTodo, maskAsCompleteTodo, updateTodo, getTodosByUserId };