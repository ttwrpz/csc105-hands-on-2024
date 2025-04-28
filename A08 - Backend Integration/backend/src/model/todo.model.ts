import { db } from "../index.ts";

const GetTodo = async () => {
  return db.todo.findMany();
};

const AddTodo = async  (newTodoName: string) => {
    await db.todo.create({
        data: {
            name: newTodoName,
            success: false
        }
    });
};

const EditTodo = async  (todoId: number, editTodoName: string) => {
  await db.todo.update({
      data: {
          name: editTodoName
      },
      where: {
          id: todoId
      }
  })
};

const SuccessTodo = async  (todoId: number) => {
    await db.todo.update({
        data: {
            success: true
        },
        where: {
            id: todoId
        }
    })
};

const DeleteTodo = async (todoId: number) => {
    await db.todo.delete({
        where: {
            id: todoId
        }
    })
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
