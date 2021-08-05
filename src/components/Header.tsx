import {useObservables} from "proxily";
import React, {useState} from "react";
import {todos} from "../store";

export function Header() {
    useObservables();

    const {addTodo} = todos
    const [text, setText] = useState('');
    const save = (e : any) => setText(e.target.value)
    const checkForEnter = (e : any) => {
        if (e.which === 13 && text.length > 0) {
            addTodo(text);
            setText("");
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input type="text" className="new-todo" autoFocus={true} placeholder="What needs to be done?"
                   value={text} onBlur={save} onChange={save} onKeyDown={checkForEnter}/>
        </header>
    )
}

