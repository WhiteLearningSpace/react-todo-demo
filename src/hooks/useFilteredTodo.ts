import {Todo} from "./useTodo";
import {useMemo, useState} from "react";

export function useFilteredTodo(todos: Todo[]) {
    const [filter, setFilter] = useState('all');

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'completed':
                return todos.filter(v => v.isCompleted);
            case 'incomplete':
                return todos.filter(v => !v.isCompleted);
            default:
                return todos;
        }
    }, [filter, todos]);
    return {
        filter,
        setFilter,
        filteredTodos
    }
}