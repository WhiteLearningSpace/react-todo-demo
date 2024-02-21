import './TodoFilter.scss'
import {ChangeEvent} from "react";

interface props {
    setFilter: (state: string) => void;
    filter: string;
}

export default function TodoFilter({filter, setFilter}: props) {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    return (
        <div id="state-radios">
            <label>
                <input type="radio"
                       name="state"
                       value="all"
                       checked={filter === "all"}
                       onChange={onChange}/>
                <span>全部</span>
            </label>
            |
            <label>
                <input type="radio"
                       name="state"
                       value="completed"
                       checked={filter === "completed"}
                       onChange={onChange}/>
                <span>已完成</span>
            </label>
            |
            <label>
                <input type="radio"
                       name="state"
                       value="incomplete"
                       checked={filter === "incomplete"}
                       onChange={onChange}/>
                <span>未完成</span>
            </label>
        </div>
    );
}