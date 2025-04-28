import React, {useState} from 'react';
import {Todo} from "../App.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Axios} from "@/lib/axiosInstance.ts";

interface TodoCardProps {
    item: Todo;
    fetchTodos: () => Promise<void>;
}

function TodoCard({
    item,
    fetchTodos,
}: TodoCardProps) {
    const [isEdited, setIsEdited] = useState<boolean>(false);
    const [editedValue, setEditedValue] = useState<string>("");

    async function handleOnMarkAsComplete(id: number) {
        try {
            const response = await Axios.patch<{
                success?: boolean;
                msg?: string;
            }>(`/todo/${id}/complete`);

            if (!response.data?.success) {
                alert('Error occurred during mark todo as complete');
            }
        } catch (e) {
            console.log(`Error fetching backend server: ${e}`);
        } finally {
            await fetchTodos();
        }
    }

    async function handleOnEdit(id: number) {
        if (!isEdited) {
            setIsEdited(true);
        } else {
            if (editedValue.length > 0) {
                try {
                    const response = await Axios.patch<{
                        success?: boolean;
                        msg?: string;
                    }>(`/todo/${id}`, {
                        name: editedValue,
                    });

                    if (!response.data?.success) {
                        alert('Error occurred during editing todo');
                    }
                } catch (e) {
                    console.log(`Error fetching backend server: ${e}`);
                } finally {
                    await fetchTodos();
                }
            }

            setIsEdited(false);
            setEditedValue("");
        }

    }

    async function handleOnDelete(id: number) {
        try {
            const response = await Axios.delete<{
                success?: boolean;
                msg?: string;
            }>(`/todo/${id}`);

            if (!response.data?.success) {
                alert('Error occurred during deleting todo');
            }
        } catch (e) {
            console.log(`Error fetching backend server: ${e}`);
        } finally {
            await fetchTodos();
        }
    }

    return (
        <Card className="flex flex-row justify-between gap-4 px-4">
            <div className="flex flex-col gap-4">
                <h1>{item.name}</h1>
                <div className="flex flex-rows gap-4">
                    <Badge variant="outline">ID: {item.id}</Badge>
                    {item.success ? (
                        <Badge variant="default">Done</Badge>
                    ) : (
                        <Badge variant="destructive">Not Done</Badge>
                    )}
                </div>
            </div>
            <div className="flex flex-row gap-4">
                {isEdited ? (
                    <Input className="border" placeholder="Type the new name" onChange={(e) => setEditedValue(e.target.value)}/>
                ) : null}
                <Button className="" onClick={() => handleOnEdit(item.id)}>Edit</Button>
                <Button variant="secondary" className=""
                        onClick={() => handleOnMarkAsComplete(item.id)}>Mark as Complete
                </Button>
                <Button variant="destructive" onClick={() => handleOnDelete(item.id)}>Delete
                </Button>
            </div>
        </Card>
    );
}

export default TodoCard;