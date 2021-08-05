import {useObservables} from "proxily";
import React from "react";
import {todos} from "../store";
import {TodoListItem} from "./TodoListItem";

export function TodoList() {
    useObservables();
    const {filteredTodos, items, completedTodos, completeAll} = todos;

    return (
        <>
            {!!items.length &&
			    <span>
                    <input type="checkbox" className="toggle-all" readOnly
                           checked={completedTodos.length === items.length}/>
                    <label onClick={completeAll}/>
                </span>
            }
            <ul className="todo-list">
                {filteredTodos.map(todo =>
                    <TodoListItem key={todo.id} todo={todo}/>
                )}
            </ul>
        </>
    )
}
