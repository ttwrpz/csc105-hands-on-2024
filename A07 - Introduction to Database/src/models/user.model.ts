import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const updateUser = async( id: number, firstName: string, lastName: string ) => {
    const user = await db.user.update({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
        where: {
            id: id,
        }
    });
    return user;
}

const getUsers = async( ) => {
    const user = await db.user.findMany({

    });
    return user;
}

const getUserById = async( id: number) => {
    const user = await db.user.findFirst({
        where: {
            id: id
        },
    });
    return user;
}

export { isDuplicate,createUser, getUsers, getUserById, updateUser};