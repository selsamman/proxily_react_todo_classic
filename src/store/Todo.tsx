let newId = 1;

export class Todo {

	id = 0;
	text = ""
	completed = false;
	editing = false;

	constructor(text?: string) {
		this.text = text || "";
		this.id = newId++;
	}

	toggleComplete() {
		this.completed = !this.completed;
	}
}
