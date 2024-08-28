import React, { useState } from "react";

export const TodoList = () => {
    const [input, setInput] = useState("")
    const [task, setTask] = useState([])

    const handleInput = (event) => { setInput(event.target.value);}


    const handleSubmit = (event) => {
        if(input.trim() === "") return;
        setTask([...task, input]);
        setInput("");
        console.log(input);
    }

    return (
        <div className="container">
            <h1>TodoList</h1>
            <div className="card d-flex justify-content-center" >
                <div className="card-header">
                    <input type="text" placeholder="Nueva Tarea..." value={input} onChange={handleInput} />
                    <button type="submit" className="btn btn-success m-1" onClick={handleSubmit}>Añadir</button>
                </div>
                <div className="card-body">
                    <ul>
                            {task.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}