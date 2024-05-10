import React, { useState, useEffect } from 'react';

function DataFetching() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Todos Data</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </div>
    );
}

export default DataFetching;
