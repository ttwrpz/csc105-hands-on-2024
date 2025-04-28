import TodoCard from "./components/TodoCard.tsx";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Axios} from "@/lib/axiosInstance.ts";

export type Todo = {
    id: number;
    name: string | undefined;
    success: boolean;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    async function handleOnAdd() {
        const name = prompt('Enter new todo');

        if (!name) return;

        try {
            const response = await Axios.post<{
                success?: boolean;
                msg?: string;
            }>('/todo', {
                name,
            });

            if (!response.data?.success) {
                alert('Error occurred during create new todo');
            }
        } catch (e) {
            console.log(`Error fetching backend server: ${e}`);
        } finally {
            await fetchTodos();
        }
    }

    const fetchTodos = async () => {
        try {
            const response = await Axios.get<{
                success?: boolean;
                data: Todo[];
                msg?: string;
            }>('/todo');

            if (!response.data.success) return;
            setTodos(response.data.data);
        } catch (e) {
            console.log(`Error fetching backend server: ${e}`);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="max-w-3xl mx-auto min-h-svh flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full gap-4">
                <h1 className="text-xl font-bold">Todo App</h1>
                <Button size="lg" onClick={handleOnAdd}>Add</Button>
            </div>
            <div className="flex flex-col gap-4 w-full">
                {todos.map((item) => (
                    <TodoCard key={item.id} item={item} fetchTodos={fetchTodos}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
