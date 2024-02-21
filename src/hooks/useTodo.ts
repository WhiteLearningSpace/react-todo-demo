import {useEffect, useState} from "react";

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

export function useTodo() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const isToGenerateMockData = true;

    /**
     * 添加事项
     * @param title 事项标题
     */
    const addTodo = (title: string) => {
        const newTodos = [...todos, {
            id: todos[todos.length - 1].id + 1,
            text: title,
            isCompleted: false
        }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    /**
     * 删除事项
     * @param id 事项id
     */
    const removeTodo = (id: number) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    /**
     * 切换事项状态
     * @param id 事项id
     */
    const toggleTodo = (id: number) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    useEffect(() => {
        if (isToGenerateMockData) {
            const todos = JSON.parse(localStorage.getItem('todos') ?? "[]");
            if (todos.length === 0) {
                console.log("生成模拟数据");
                localStorage.setItem('todos', JSON.stringify(mockData));
            }
        }
        setTodos(getTodos());
    }, [isToGenerateMockData]);

    /**
     * 获取事项列表
     */
    const getTodos = (): Todo[] => {
        const todos = localStorage.getItem('todos');
        if (todos) {
            return JSON.parse(todos);
        }
        return [];
    }

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo
    }
}

const mockData = [
    {
        id: 1,
        text: '学习Vue3',
        isCompleted: true
    },
    {
        id: 2,
        text: '学习Vite',
        isCompleted: false
    },
    {
        id: 3,
        text: '学习Vue Router',
        isCompleted: false
    },
    {
        id: 4,
        text: '学习Vuex',
        isCompleted: false
    },
    {
        id: 5,
        text: '学习React',
        isCompleted: false
    },
    {
        id: 6,
        text: '学习Java',
        isCompleted: false
    },
    {
        id: 7,
        text: '学习Mysql',
        isCompleted: false
    },
    {
        id: 8,
        text: '学习Redis',
        isCompleted: false
    },
    {
        id: 9,
        text: '学习Nginx',
        isCompleted: false
    },
    {
        id: 10,
        text: '学习Docker',
        isCompleted: false
    },
    {
        id: 11,
        text: '学习Kubernetes',
        isCompleted: false
    },
    {
        id: 12,
        text: '学习Jenkins',
        isCompleted: false
    },
    {
        id: 13,
        text: '学习Git',
        isCompleted: false
    },
    {
        id: 14,
        text: '学习Github',
        isCompleted: false
    },
    {
        id: 15,
        text: '学习Gitlab',
        isCompleted: false
    }
];