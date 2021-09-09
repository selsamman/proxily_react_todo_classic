import {useObservableProp, observer} from "proxily";
import React from "react";
import {todos} from "../store";
import {Filters} from "../store/Todos";

export const Footer = observer(function Footer() {

    const [filter, setFilter] = useObservableProp(todos.filter);
    const {activeTodos, completedTodos, clearCompleted, items} = todos;

    return (
        <>
            {items.length > 0 &&
			<footer className="footer">

                    <span className="todo-count">
                        <strong>{activeTodos.length || 'No'}</strong> Todo{activeTodos.length > 1 ? 's' : ''} left
                    </span>

				<ul className="filters">
                    {Object.entries(Filters).map(([key, value ]) =>
                        <li key={key}>
                            <a className={key === filter ? 'active' : ''} style={{cursor: 'pointer'}}
                               onClick={() => setFilter(value)}>
                                {value}
                            </a>
                        </li>
                    )}
				</ul>

                {
                    !!completedTodos.length &&
					<button
						className="clear-completed"
						onClick={clearCompleted}
					>Clear completed</button>

                }
			</footer>
            }
        </>
    )
});

