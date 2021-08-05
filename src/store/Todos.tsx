import {Todo} from "./Todo";

export enum Filters {
    SHOW_ALL = 'All',
    SHOW_COMPLETED = 'Completed',
    SHOW_ACTIVE = 'Active'
}

export class Todos {

    items: Array<Todo> = [new Todo("Use Proxily")];
    filter: Filters = Filters.SHOW_ALL

    get filteredTodos() {
        return this.filter === Filters.SHOW_ACTIVE ? this.activeTodos :
            this.filter === Filters.SHOW_COMPLETED ? this.completedTodos : this.items
    }

    get completedTodos() {
        return this.items.filter(t => t.completed);
    }

    get activeTodos() {
        return this.items.filter(t => !t.completed)
    }

    addTodo(text : string) {
        this.items.push(new Todo(text));
    }

    deleteTodo(todo: Todo) {
        this.items.splice(this.items.findIndex(t => t === todo), 1);
    }

    clearCompleted() {
        this.completedTodos.slice(0).forEach(t => this.deleteTodo(t))
    }

    completeAll() {
        this.activeTodos.forEach(t => t.completed = true);
    }

}
