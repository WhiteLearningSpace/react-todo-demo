import './TodoAdd.scss'
import {FormEvent, useRef} from "react";

interface props {
    onAddTodo: (title: string) => void;
}

export default function TodoAdd({onAddTodo}: props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const content = inputRef.current != null ? inputRef.current.value : "";
        onAddTodo(content);
    }
    return (
        <form id="todo-add-form" onSubmit={onSubmit}>
            <div className="add-input">
                <input ref={inputRef} type="text"/>
                <button type="submit"></button>
            </div>
        </form>
    );

}