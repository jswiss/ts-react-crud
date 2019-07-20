import React, { Component } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TasksList from './components/TasksList';
import { Task } from './models/task';

interface State {
	newTask: Task;
	tasks: Task[];
}

class App extends Component<{}, State> {
	state = {
		newTask: {
			id: 1,
			name: '',
		},
		tasks: [],
	};

	private addTask = (event: React.FormEvent<HTMLFormElement>) => {
		// private addTask = (event: any) => {
		event.preventDefault();

		this.setState(previousState => ({
			newTask: {
				id: previousState.newTask.id + 1,
				name: '',
			},
			tasks: [...previousState.tasks, previousState.newTask],
		}));
	};

	private updateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			newTask: {
				...this.state.newTask,
				name: event.target.value,
			},
		});
	};

	private deleteTask = (taskToDelete: Task) => {
		this.setState(previousState => ({
			tasks: [...previousState.tasks.filter(task => task.id !== taskToDelete.id)],
		}));
	};

	render() {
		return (
			<div>
				<h2>What up React TS!</h2>
				<NewTaskForm task={this.state.newTask} onAdd={this.addTask} onChange={this.updateTask} />
				<TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
			</div>
		);
	}
}

export default App;
