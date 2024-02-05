import { makeAutoObservable } from "mobx";

interface Tasks {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}


class TaskStore {
    tasks: Tasks[] = [
        { id: 0, title: 'ToDo', description: 'Сделать ToDo, разбить на компоненты', completed: false },
        { id: 1, title: 'Components', description: 'Максимально разбить на компоненты', completed: false },
        { id: 2, title: 'Props', description: 'Изучить пропсы', completed: false },
        { id: 3, title: 'Filter', description: 'Добавить фильтрацию в зависимости от статуса задачи', completed: false },
        { id: 4, title: 'Delete', description: 'Добавить удаление карточек', completed: false }
    ];
    //     tasks: Это имя свойства, которое будет использоваться для хранения массива задач.


    // Task[]: Это тип данных для свойства tasks. Он говорит TypeScript, что tasks должно быть массивом объектов типа Task.

    // = []: Это оператор присваивания с пустым массивом. Таким образом, свойство tasks инициализируется пустым массивом при создании экземпляра класса TaskStore.

    constructor() {
        makeAutoObservable(this)
    }

    ////////////////////////////////////////////////////////////////////
    addTask(newTask: { title: string, description: string }) {
        const task: Tasks = {
            id: Date.now(),
            title: newTask.title,
            description: newTask.description,
            completed: false
        }
        this.tasks.unshift(task)
    }


    /////////////////////////////////////////////////////////////////////////
    deleteTask(taskId: number) {
        this.tasks = this.tasks.filter(task => task.id !== taskId)
    }


    /////////////////////////////////////////////////////////////////////////
    updateTask(taskId: number, editedName: string, editedText: string) {
        this.tasks = this.tasks.map(task => task.id === taskId ? { ...task, title: editedName, description: editedText } : task)
    }
    /////////////////////////////////////////////////////////////////////////
    changeTaskStatus(taskId: number) {
        this.tasks = this.tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
    }
}

export const tasksStore = new TaskStore()