import React, { FunctionComponent } from 'react';

import { Task } from '../models/task';

interface Props {
	task: Task;
	onDelete: (task: Task) => void;
}

const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
	const onClick = () => {
		onDelete(task);
	};

	return (
		<li>
			{task.name} <button onClick={onClick}>X</button>
		</li>
	);
};

export default TaskListItem;
