import {Todo} from "../store/Todo";
import {useObservableProp, useObservables} from "proxily";
import React from "react";
import {todos} from "../store";

export function TodoListItem({todo}: { todo: Todo }) {
    useObservables();

    const {completed, toggleComplete} = todo;
    const [editing, setEditing] = useObservableProp(todo.editing)
    const [text, setText] = useObservableProp(todo.text);
    const {deleteTodo} = todos

    const save = (e : any) => setText(e.target.value);
    const edit = () => setEditing(true);

    return (
        <li className={[completed ? 'completed' : '', editing ? 'editing' : ''].join(' ')}>
            {editing &&
			<input type="text" className="edit" autoFocus={true}
			       value={text} onBlur={save} onChange={save}/>
            }
            {!editing &&
			<div className="view">
				<input type="checkbox" className="toggle" checked={completed} onChange={toggleComplete}/>
				<label onDoubleClick={edit}> {text} </label>
				<button className="destroy" onClick={() => deleteTodo(todo)}/>
			</div>
            }
        </li>
    )
}
