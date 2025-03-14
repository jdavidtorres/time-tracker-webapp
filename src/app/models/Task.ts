export class Task {
	id: string | null;
	title: string | null;
	projectId: string | null;
	projectName: string | null;
	dueDate: Date | null;
	priority: string | null;

	constructor() {
		this.id = null;
		this.title = null;
		this.projectId = null;
		this.projectName = null;
		this.dueDate = null;
		this.priority = null;
	}
}
