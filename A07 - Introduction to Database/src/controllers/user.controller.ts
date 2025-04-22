import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
    firstName: string;
    lastName: string;
};
const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json({
                success: false,
                data: null,
                msg: "firstName or lastName is duplicated",
            });
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "Created new User!",
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
};

const getUsers = async (c: Context) => {
    try {
        return c.json({
            success: true,
            data: await userModel.getUsers(),
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

type editUserBody = createUserBody;
const editUser = async (c: Context) => {
    try {
        const idParam = c.req.query('id');

        const body = await c.req.json<editUserBody>();
        if (!idParam || !body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );

        if (isNaN(Number(idParam))) {
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

        await userModel.updateUser(id, body.firstName, body.lastName);

        return c.json({
            success: true,
            msg: "Change data successfully",
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

export { createUser, getUsers, editUser };