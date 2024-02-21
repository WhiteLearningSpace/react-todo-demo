import './TodoList.scss'
import {Todo} from "../../hooks/useTodo.ts";

interface props {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onRemoveTodo: (id: number) => void;
}

export default function TodoList({todos, onToggleTodo, onRemoveTodo}: props) {
    const handleChange = (id: number) => {
        onToggleTodo(id);
    }
    const handleClick = (id: number) => {
        onRemoveTodo(id);
    }

    return (
        <div id="todo-list">
            {
                todos.map(v => (
                    <div key={v.id} className="todo-item">
                        <label>
                            <input checked={v.isCompleted} type="checkbox" onChange={() => handleChange(v.id)}/>
                            <span className="checked-mark"></span>
                            <span className="text">{v.text}</span>
                        </label>
                        <button onClick={() => handleClick(v.id)}>x</button>
                    </div>
                ))
            }
        </div>
    );
}