import { useState } from "react";

export const useNewTodo = () => {
    const [newTodo, setNewTodo] = useState('');

    return {
        newTodo,
        setNewTodo
    }
}