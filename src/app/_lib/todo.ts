/**
 * Represents a task with an ID, title, completion status, and creation date.
 */
export interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

/**
 * Array of tasks.
 */
export let tasks: Task[] = [];

/**
 * Adds a new task to the tasks array.
 * The new task has a default title "New Task", is not completed, and has the current date as its creation date.
 * Emits an update event after adding the task.
 */
export function addTask() {
    const newTask: Task = {
        id: tasks.length,
        title: "New Task",
        completed: false,
        createdAt: new Date()
    };
    tasks.push(newTask);
    taskUpdateEmitter.emit();
}

/**
 * Removes a task from the tasks array.
 * Emits an update event after removing the task.
 * 
 * @param task The task to be removed.
 */
export function removeTask(task: Task) {
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
        tasks.splice(index, 1);
        taskUpdateEmitter.emit();
    }
}

/**
 * Edits the title of a task.
 * If the new title is empty, the task is removed.
 * 
 * @param task The task to be edited.
 * @param newTitle The new title for the task.
 */
export function editTask(task: Task, newTitle: string) {
    if (newTitle.length === 0) {
        removeTask(task);
    }
    task.title = newTitle;
}

/**
 * Toggles the completion status of a task.
 * Emits an update event after toggling the task.
 * 
 * @param task The task to be toggled.
 */
export function toggleTask(task: Task) {
    task.completed = !task.completed;
    taskUpdateEmitter.emit();
}

/**
 * Updates the tasks array with a new array of tasks.
 * Emits an update event after updating the tasks.
 * 
 * @param newTasks The new array of tasks.
 */
export function updateTasks(newTasks: Task[]) {
    tasks = newTasks;
    taskUpdateEmitter.emit();
}

type Listener = () => void;

/**
 * EventEmitter class to handle subscription and emission of events.
 */
class EventEmitter {
    private listeners: Listener[] = [];

    /**
     * Subscribes a listener to the event emitter.
     * 
     * @param listener The listener function to be subscribed.
     * @returns A function to unsubscribe the listener.
     */
    subscribe(listener: Listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    /**
     * Emits an event to all subscribed listeners.
     */
    emit() {
        this.listeners.forEach(listener => listener());
    }
}

/**
 * An instance of EventEmitter to handle task update events.
 */
export const taskUpdateEmitter = new EventEmitter();