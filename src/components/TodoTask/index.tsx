import { ITask } from "../../interfaces"

interface Props {
    task: ITask;
    finishTask(taskToDelete: number): void;
}

export const TodoTask = ({ task, finishTask }: Props) => {
    return (
        <div className='todo-item'>
            <span>{task.name} - {task.date.toLocaleDateString('pt-BR')}</span>
            <span className='finish-task'
            onClick={() => finishTask(task.id)}
            >✓</span>
        </div>
    )
}