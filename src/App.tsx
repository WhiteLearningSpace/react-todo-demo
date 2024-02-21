import TodoAdd from "./components/TodoAdd/TodoAdd.tsx";
import TodoFilter from "./components/TodoFilter/TodoFilter.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import {useTodo} from "./hooks/useTodo.ts";
import {useFilteredTodo} from "./hooks/useFilteredTodo.ts";

export default function App() {

    const {todos, addTodo, removeTodo, toggleTodo} = useTodo();
    const {filter, setFilter, filteredTodos} = useFilteredTodo(todos);

    return (
        <>
            <h1>TODOLIST</h1>
            <TodoAdd onAddTodo={addTodo}/>
            <TodoFilter filter={filter} setFilter={setFilter}/>
            <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo}/>
        </>
    )
}
