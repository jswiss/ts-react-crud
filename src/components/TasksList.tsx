import React, { FunctionComponent } from 'react';

import { Task } from '../models/task';
import TaskListItem from './TaskListItem';

interface Props {
	tasks: Task[];
	onDelete: (task: Task) => void;
}

const TasksList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
	<ul>
		{tasks.map(task => (
			<TaskListItem task={task} onDelete={onDelete} />
		))}
	</ul>
);

export default TasksList;
