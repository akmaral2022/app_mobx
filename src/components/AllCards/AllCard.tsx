import Card from '../Card/Card';
import { observer } from 'mobx-react-lite';
import { tasksStore } from '../../store/taskStore';



interface AllCardProps {
    filterCompleted: 'all' | 'completed' | 'not completed';
}

const AllCard: React.FC<AllCardProps> = ({ filterCompleted }) => {
    const filteredTasksToShow = filterTasks(filterCompleted)



    return (
        <div>
            {filteredTasksToShow.map((task) => (
                <Card
                    key={task.id}
                    id={task.id}
                    name={task.title}
                    text={task.description}
                    completed={task.completed}
                    onChangeStatus={() => tasksStore.changeTaskStatus(task.id)}
                    onDelete={() => tasksStore.deleteTask(task.id)}
                    onEdit={(id, editedName, editedText) => tasksStore.updateTask(task.id, editedName, editedText)}

                />
            ))}
        </div>
    );
}
const filterTasks = (filterCompleted: 'all' | 'completed' | 'not completed') => {
    switch (filterCompleted) {
        case 'completed':
            return tasksStore.tasks.filter((task) => task.completed);
        case 'not completed':
            return tasksStore.tasks.filter((task) => !task.completed);
        default:
            return tasksStore.tasks;
    }
};
export default observer(AllCard);


// vite,  ant disign - сайт