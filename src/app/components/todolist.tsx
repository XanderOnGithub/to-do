'use client';

import { useState, useEffect } from "react";
import { Task, toggleTask, tasks as initialTasks, taskUpdateEmitter } from "../_lib/todo";
import Todo from "./todo";
import { AnimatePresence, motion } from "framer-motion";

/**
 * TodoList component representing the list of tasks.
 */
export default function TodoList() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    /**
     * useEffect hook to subscribe to task updates.
     * Updates the tasks state when the taskUpdateEmitter emits an event.
     */
    useEffect(() => {
        const unsubscribe = taskUpdateEmitter.subscribe(() => {
            setTasks([...initialTasks]);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    /**
     * Handles the toggle of a task's completion status.
     * 
     * @param task The task to be toggled.
     */
    function handleToggleTask(task: Task) {
        toggleTask(task);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <AnimatePresence>
                {tasks.map(task => (
                    <Todo key={task.id} task={task} onToggleTask={handleToggleTask} />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}